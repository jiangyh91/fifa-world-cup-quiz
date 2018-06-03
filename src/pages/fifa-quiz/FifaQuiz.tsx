import * as React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import { WithStyles, withStyles } from '@material-ui/core';
import * as queryString from 'query-string';

import HomePage from './steps/home-page';
import Intro from './steps/intro';
import styles, { ClassKeys } from './styles';

interface FiFaQuizProps {}

type Props = FiFaQuizProps & WithStyles<ClassKeys> & RouteComponentProps<{}>;

class FiFaQuiz extends React.PureComponent<Props> {
  public render() {
    const { step } = queryString.parse(location.search);
    switch (step) {
      case "0":
        return <Intro />;
      default:
        return <HomePage onNext={this.onNextClick} />;
    }
  }
  private onNextClick = (
    event: React.SyntheticEvent<HTMLButtonElement>,
    nextStepValue: number
  ) => {
    this.props.history.push(`./?step=${nextStepValue}`);
  };
}

export default withStyles(styles)(FiFaQuiz);