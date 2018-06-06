import * as React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import { WithStyles, withStyles } from '@material-ui/core';
import * as queryString from 'query-string';

import EightStage from './steps/eight-stage';
import FourStage from './steps/four-stage';
import GroupStage from './steps/group-stage';
import HomePage from './steps/home-page';
import Intro from './steps/intro';
import Result from './steps/result';
import SixteenStage from './steps/sixteen-stage';
import TwoStage from './steps/two-stage';
import styles, { ClassKeys } from './styles';

interface FiFaQuizProps {}

type Props = FiFaQuizProps & WithStyles<ClassKeys> & RouteComponentProps<{}>;

class FiFaQuiz extends React.PureComponent<Props> {
  private values: Array<any> = [];
  public render() {
    const { step } = queryString.parse(location.search);
    switch (Number(step)) {
      case 1:
        return <Intro onNext={this.onNextClick} />;
      case 2:
        return <GroupStage onNext={this.onNextClick} values={this.values} />;
      case 3:
        return <SixteenStage onNext={this.onNextClick} values={this.values} />;
      case 4:
        return <EightStage onNext={this.onNextClick} values={this.values} />;
      case 5:
        return <FourStage onNext={this.onNextClick} values={this.values} />;
      case 6:
        return <TwoStage onNext={this.onNextClick} values={this.values} />;
      case 7:
        return <Result onNext={this.onNextClick} values={this.values} />;
      default:
        return <HomePage onNext={this.onNextClick} />;
    }
  }
  private onNextClick = (currentStep: number, value?: any) => {
    if (value !== undefined) {
      this.values[currentStep] = value;
      this.values = this.values.slice(0, currentStep + 1);
      console.log(this.values);
      console.log(JSON.stringify(this.values));
    }
    this.props.history.push(`./?step=${currentStep + 1}`);
  };
}

export default withStyles(styles)(FiFaQuiz);
