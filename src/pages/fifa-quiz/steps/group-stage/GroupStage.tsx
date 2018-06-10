import * as classNames from 'classnames';
import * as React from 'react';

import {
  Button,
  ButtonBase,
  Divider,
  ListSubheader,
  Paper,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import { dataAttribute } from 'src/utils/domHelper';

import FlexLayout from 'src/components/flex-layout';
import Screen from 'src/components/screen';
import StepFlag from 'src/components/step-flag';

import { resolveTeamValue } from './helpers';
import tadaball from './images/tadaball.png';
import { flagMapping, getInitialGroupStageValues, Group, teamGroups } from './models';
import styles, { ClassKeys } from './styles';

interface GroupStageProps {
  values: Array<any>;
  onNext(nextStepValue: number, value?: any): void;
}

type Props = GroupStageProps & WithStyles<ClassKeys>;

interface States {
  groupStageValues: Array<Array<string>>;
}
class GroupStage extends React.PureComponent<Props, States> {
  private step = 2;
  constructor(props: Props) {
    super(props);
    const { values } = props;
    this.state = {
      groupStageValues: values[this.step] || getInitialGroupStageValues()
    };
  }
  componentDidMount() {
    if (!this.props.values[1]) {
      this.props.onNext(-1);
    }
  }

  public get disableNext() {
    const { groupStageValues } = this.state;
    for (let i = 0; i < groupStageValues.length; i++) {
      if (groupStageValues[i].indexOf("") !== -1) {
        return true;
      }
    }
    return false;
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
          <div className={classNames(classes.point, classes.red, classes.marginBottom)}>
            <span>第一轮：</span>
            <span className={classNames(classes.black)}>选择小组第一及小组第二，进入16强,</span>
            <span>猜中即可累计20小时PTE</span>
          </div>
          {teamGroups.map(this.renderGroup)}
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={this.handleOnNextClick}
            disabled={this.disableNext}
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
        <ListSubheader className={classes.groupHeader} disableSticky component="div">
          {group.name === "A" ? group.name + "组 (*每组四选二)" : group.name + "组"}
        </ListSubheader>
        <Divider />
        <FlexLayout>
          {this.renderTeamButton(index, group.teams, 0)}
          {this.renderTeamButton(index, group.teams, 1)}
        </FlexLayout>
        <Divider />
        <FlexLayout>
          {this.renderTeamButton(index, group.teams, 2)}
          {this.renderTeamButton(index, group.teams, 3)}
        </FlexLayout>
      </Paper>
    );
  };
  private renderTeamButton(groupIndex: number, teams: Array<string>, teamIndex: number) {
    const { classes } = this.props;
    const { groupStageValues } = this.state;
    const teamName = teams[teamIndex];
    const teamValue = resolveTeamValue(groupStageValues, groupIndex, teamName);
    return (
      <ButtonBase
        className={classNames(
          classes.teamButton,
          teamValue && classes.checkedButton,
          teamIndex === 2 && classes.bottomLeftRadius,
          teamIndex === 3 && classes.bottomRightRadius
        )}
        data-group-index={groupIndex}
        data-team-name={teamName}
        onClick={this.handleOnTeamClick}
      >
        <img src={flagMapping[teamName]} alt={teamName} />
        <div className={classes.teamName}>{teamName}</div>
        <div className={classNames(classes.checkBox, !!teamValue ? classes.checked : classes.unchecked)}>
          {teamValue}
        </div>
      </ButtonBase>
    );
  }

  private handleOnTeamClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();

    const groupIndex = Number(dataAttribute("group-index", event) || 0);
    const targetTeamName = dataAttribute("team-name", event) || "";

    const { groupStageValues } = this.state;
    const groupValues = groupStageValues[groupIndex];

    const targetIndex = groupValues.findIndex(teamName => teamName === targetTeamName);
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
    this.props.onNext(this.step, groupStageValues);
  };
}

export default withStyles(styles)(GroupStage);
