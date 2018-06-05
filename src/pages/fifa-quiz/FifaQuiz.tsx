import * as React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import { WithStyles, withStyles } from '@material-ui/core';
import * as queryString from 'query-string';

import GroupStage from './steps/group-stage';
import HomePage from './steps/home-page';
import Intro from './steps/intro';
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
      default:
        return <HomePage onNext={this.onNextClick} />;
    }
  }
  private onNextClick = (
    event: React.SyntheticEvent<HTMLButtonElement>,
    currentStep: number,
    value?: any
  ) => {
    if (value !== undefined) {
      this.values[currentStep] = value;
      this.values = this.values.slice(0, currentStep + 1);
      console.log(this.values);
    }
    this.props.history.push(`./?step=${currentStep + 1}`);
  };
}

export default withStyles(styles)(FiFaQuiz);
