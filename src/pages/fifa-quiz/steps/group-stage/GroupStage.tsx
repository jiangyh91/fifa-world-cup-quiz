import * as classNames from 'classnames';
import * as React from 'react';

import { Button, ButtonBase, Divider, ListSubheader, Paper, Typography, WithStyles, withStyles } from '@material-ui/core';
import { dataAttribute } from 'src/utils/domHelper';

import Screen from 'src/components/screen';

import FlexLayout from '../../../../components/flex-layout';
import StepFlag from '../../../../components/step-flag';
import { resolveTeamValue } from './helpers';
import tadaball from './images/tadaball.png';
import { flagMapping, getInitialGroupStageValues, Group, teamGroups } from './models';
import styles, { ClassKeys } from './styles';

interface groupStageProps {
  values: Array<any>;
  onNext(
    event: React.SyntheticEvent<HTMLButtonElement>,
    nextStepValue: number,
    value: any
  ): void;
}

type Props = groupStageProps & WithStyles<ClassKeys>;

interface States {
  groupStageValues: Array<Array<string>>;
}
class groupStage extends React.PureComponent<Props, States> {
  private step = 2;
  constructor(props: Props) {
    super(props);
    const { values } = props;
    this.state = {
      groupStageValues: values[this.step] || getInitialGroupStageValues()
    };
  }
  public render() {
    const { classes } = this.props;
    return (
      <Screen footer>
        <StepFlag step={2} />
        <Typography variant="headline" className={classes.headline}>
          游戏规则
        </Typography>
        <div className={classes.paper}>
          <div className={classNames(classes.point, classes.red)}>
            <span>第一轮：</span>
            <span className={classNames(classes.black)}>
              选择小组第一及小组第二，进入16强,
            </span>
            <span>猜中即可累计20小时PTE</span>
          </div>
          {teamGroups.map(this.renderGroup)}
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={this.handleOnNextClick}
          >
            进入十六强
          </Button>
        </div>
        <img src={tadaball} className={classes.cornerImage} alt="tadaball" />
      </Screen>
    );
  }

  private renderGroup = (group: Group, index: number) => {
    const { classes } = this.props;
    return (
      <Paper key={group.name} className={classes.group}>
        <ListSubheader
          className={classes.groupHeader}
          disableSticky
          component="div"
        >
          {group.name}组
        </ListSubheader>
        <Divider />
        <FlexLayout>
          {this.renderTeamButton(index, group.teams[0])}
          {this.renderTeamButton(index, group.teams[1])}
        </FlexLayout>
        <Divider />
        <FlexLayout>
          {this.renderTeamButton(index, group.teams[2])}
          {this.renderTeamButton(index, group.teams[3])}
        </FlexLayout>
      </Paper>
    );
  };
  private renderTeamButton(groupIndex: number, teamName: string) {
    const { classes } = this.props;
    const { groupStageValues } = this.state;
    const teamValue = resolveTeamValue(groupStageValues, groupIndex, teamName);
    return (
      <ButtonBase
        className={classNames(
          classes.teamButton,
          teamValue && classes.checkedButton
        )}
        data-group-index={groupIndex}
        data-team-name={teamName}
        onClick={this.handleOnTeamClick}
      >
        <img src={flagMapping[teamName]} alt={teamName} />
        <div className={classes.teamName}>{teamName}</div>
        {this.renderCheckBox(teamValue)}
      </ButtonBase>
    );
  }

  private renderCheckBox(value?: string) {
    const { classes } = this.props;
    return (
      <div
        className={classNames(
          classes.checkBox,
          !!value ? classes.checked : classes.unchecked
        )}
      >
        {value}
      </div>
    );
  }
  private handleOnTeamClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const groupIndex = Number(dataAttribute("group-index", event) || 0);
    const targetTeamName = dataAttribute("team-name", event) || "";

    const { groupStageValues } = this.state;
    const groupValues = groupStageValues[groupIndex];

    const targetIndex = groupValues.findIndex(
      teamName => teamName === targetTeamName
    );
    if (targetIndex !== -1) {
      groupValues[targetIndex] = "";

      groupStageValues[groupIndex] = groupValues.concat();
      this.setState({ groupStageValues: groupStageValues.concat() });
    } else {
      const emptyIndex = groupValues.findIndex(teamName => teamName === "");
      if (emptyIndex !== -1) {
        groupValues[emptyIndex] = targetTeamName;
        groupStageValues[groupIndex] = groupValues.concat();
        this.setState({ groupStageValues: groupStageValues.concat() });
      }
    }
  };
  private handleOnNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { groupStageValues } = this.state;
    this.props.onNext(event, 2, groupStageValues);
  };
}

export default withStyles(styles)(groupStage);
