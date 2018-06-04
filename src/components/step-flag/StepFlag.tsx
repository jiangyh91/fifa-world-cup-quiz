import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core';

import stepImage from './images/step.png';
import styles, { ClassKeys } from './styles';

interface StepFlagProps {
  step: number;
}

type Props = StepFlagProps & WithStyles<ClassKeys>;

class StepFlag extends React.PureComponent<Props> {
  public render() {
    const { classes, children, step } = this.props;
    return (
      <div className={classes.container}>
        <img src={stepImage} className={classes.stepImage} alt="step" />
        <div className={classes.text}>
          <span>Step {step}</span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(StepFlag);
