import * as React from 'react';

import { Button, Paper, WithStyles, withStyles } from '@material-ui/core';

import Screen from 'src/components/screen';

import desc from './images/desc.png';
import logo from './images/logo.png';
import star from './images/star.png';
import tada from './images/tada.png';
import styles, { ClassKeys } from './styles';

interface HomePageProps {
  onNext(nextStepValue: number): void;
}

type Props = HomePageProps & WithStyles<ClassKeys>;

class HomePage extends React.PureComponent<Props> {
  private step = 0;
  public render() {
    const { classes } = this.props;
    return (
      <Screen background backdrop flex>
        <img src={star} className={classes.starImage1} alt="star" />
        <img src={star} className={classes.starImage2} alt="star" />
        <img src={star} className={classes.starImage3} alt="star" />
        <img src={logo} className={classes.logoImage} alt="logo" />
        <Paper className={classes.paper} elevation={6}>
          <img src={tada} className={classes.tadaImage} alt="tada" />
          <img src={desc} className={classes.descImage} alt="desc" />
        </Paper>
        <Button className={classes.button} variant="raised" color="primary" onClick={this.handleOnNextClick}>
          立即开启
        </Button>
      </Screen>
    );
  }

  private handleOnNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.props.onNext(this.step);
  };
}

export default withStyles(styles)(HomePage);
