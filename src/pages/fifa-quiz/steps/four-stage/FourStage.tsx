import * as classNames from 'classnames';
import * as React from 'react';

import { Button, Typography, WithStyles, withStyles } from '@material-ui/core';

import FlexLayout from 'src/components/flex-layout';
import Screen from 'src/components/screen';
import StepFlag from 'src/components/step-flag';

import { prepareTeams } from '../eight-stage/helpers';
import TeamButtonGroup from '../sixteen-stage/components/team-button-group';
import { disabledNext } from '../sixteen-stage/helpers';
import vsImage from '../sixteen-stage/images/vs.svg';
import castle from '../two-stage/images/castle.png';
import styles, { ClassKeys } from './styles';

interface FourStageProps {
  values: Array<any>;
  onNext(nextStepValue: number, value?: any): void;
}

type Props = FourStageProps & WithStyles<ClassKeys>;

interface States {
  stageValues: Array<string>;
}
class FourStage extends React.PureComponent<Props, States> {
  private step = 5;

  private teamsArray: Array<Array<string>>;

  constructor(props: Props) {
    super(props);
    const { values } = props;
    this.state = {
      stageValues: values[this.step] || []
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
    const { stageValues } = this.state;
    return (
      <Screen footer>
        <StepFlag step={this.step} />
        <Typography variant="headline" className={classes.headline}>
          游戏规则
        </Typography>
        <div className={classes.paper}>
          <div className={classNames(classes.point, classes.red)}>
            <span>第四轮：</span>
            <span className={classNames(classes.black)}>选择决赛团队晋级,</span>
            <span>猜中即可累计10小时PTE</span>
          </div>
          <FlexLayout className={classes.vsImageBox} justifyContent="space-around">
            <img src={vsImage} alt="vs" />
          </FlexLayout>
          <TeamButtonGroup winnerArray={stageValues} teamsArray={this.teamsArray} onClick={this.handleOnTeamClick} />
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={this.handleOnNextClick}
            disabled={disabledNext(stageValues, 2)}
          >
            进入决赛
          </Button>
        </div>
        <img src={castle} className={classes.cornerImage} alt="tadaball" />
      </Screen>
    );
  }

  private handleOnTeamClick = (event: React.MouseEvent<HTMLButtonElement>, value: Array<string>) => {
    this.setState({ stageValues: value });
  };
  private handleOnNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { stageValues } = this.state;
    this.props.onNext(this.step, stageValues);
  };
}

export default withStyles(styles)(FourStage);
