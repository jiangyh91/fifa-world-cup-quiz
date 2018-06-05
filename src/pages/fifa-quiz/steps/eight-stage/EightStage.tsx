import * as classNames from 'classnames';
import * as React from 'react';

import { Button, ButtonBase, Divider, Paper, Typography, WithStyles, withStyles } from '@material-ui/core';
import { dataAttribute } from 'src/utils/domHelper';

import FlexLayout from 'src/components/flex-layout';
import Screen from 'src/components/screen';
import StepFlag from 'src/components/step-flag';

import { flagMapping } from '../group-stage/models';
import footNball from '../sixteen-stage/images/footNball.png';
import { prepareTeams } from './helpers';
import styles, { ClassKeys } from './styles';

interface EightStageProps {
  values: Array<any>;
  onNext(nextStepValue: number, value?: any): void;
}

type Props = EightStageProps & WithStyles<ClassKeys>;

interface States {
  sixteenStageValues: Array<string>;
}
class EightStage extends React.PureComponent<Props, States> {
  private step = 4;

  private teamsArray: Array<Array<string>>;

  constructor(props: Props) {
    super(props);
    const { values } = props;
    this.state = {
      sixteenStageValues: values[this.step] || []
    };
    this.teamsArray = prepareTeams(values[this.step - 1]);
  }
  componentDidMount() {
    if (!this.props.values[1]) {
      this.props.onNext(-1);
    }
  }
  public render() {
    const { classes } = this.props;
    return (
      <Screen footer>
        <StepFlag step={this.step} />
        <Typography variant="headline" className={classes.headline}>
          游戏规则
        </Typography>
        <div className={classes.paper}>
          <div className={classNames(classes.point, classes.red)}>
            <span>第三轮：</span>
            <span className={classNames(classes.black)}>选择四强团队晋级,</span>
            <span>猜中即可累计10小时PTE</span>
          </div>
          <Typography
            variant="headline"
            className={classNames(classes.headline, classes.textShadow)}
          >
            VS
          </Typography>
          {this.teamsArray.map(this.renderGroup)}

          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={this.handleOnNextClick}
            disabled={this.disableNext}
          >
            进入四强
          </Button>
        </div>
        <img src={footNball} className={classes.cornerImage} alt="tadaball" />
      </Screen>
    );
  }
  private get disableNext() {
    const { sixteenStageValues } = this.state;
    if (sixteenStageValues.length === 4) {
      if (sixteenStageValues.findIndex(item => item === undefined) === -1) {
        return false;
      }
    }
    return true;
  }
  private renderGroup = (teams: Array<string>, index: number) => {
    const { classes } = this.props;
    const { sixteenStageValues } = this.state;
    const winnerValue = sixteenStageValues[index]; // resolveTeamValue(groupStageValues, groupIndex, teamName);
    return (
      <Paper className={classes.group} key={teams[0]}>
        <React.Fragment>
          <FlexLayout>
            <ButtonBase
              className={classNames(
                classes.teamButton,
                winnerValue === teams[0] && classes.checkedButton
              )}
              data-group-index={index}
              data-team-name={teams[0]}
              onClick={this.handleOnTeamClick}
            >
              <img src={flagMapping[teams[0]]} alt={teams[0]} />
              <div className={classes.teamName}>{teams[0]}</div>
            </ButtonBase>
            <ButtonBase
              className={classNames(
                classes.teamButton,
                winnerValue === teams[1] && classes.checkedButton
              )}
              data-group-index={index}
              data-team-name={teams[1]}
              onClick={this.handleOnTeamClick}
            >
              <div className={classes.teamName}>{teams[1]}</div>
              <img src={flagMapping[teams[1]]} alt={teams[1]} />
            </ButtonBase>
          </FlexLayout>
          <Divider />
        </React.Fragment>
      </Paper>
    );
  };

  private handleOnTeamClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const groupIndex = Number(dataAttribute("group-index", event) || 0);
    const targetTeamName = dataAttribute("team-name", event) || "";

    const { sixteenStageValues } = this.state;
    if (sixteenStageValues[groupIndex] !== targetTeamName) {
      sixteenStageValues[groupIndex] = targetTeamName;
      this.setState({ sixteenStageValues: sixteenStageValues.concat() });
    }
  };
  private handleOnNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { sixteenStageValues } = this.state;
    this.props.onNext(this.step, sixteenStageValues);
  };
}

export default withStyles(styles)(EightStage);
