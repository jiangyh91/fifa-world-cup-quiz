import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core';

import Screen from 'src/components/screen';

import styles, { ClassKeys } from './styles';

interface IntroProps {}

type Props = IntroProps & WithStyles<ClassKeys>;

class Intro extends React.PureComponent<Props> {
  public render() {
    return <Screen>intro</Screen>;
  }
}

export default withStyles(styles)(Intro);
