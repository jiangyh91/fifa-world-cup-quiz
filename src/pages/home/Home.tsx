import * as React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import { Button, WithStyles, withStyles } from '@material-ui/core';

import styles, { ClassKeys } from './styles';

interface FirstPageProps {}

type Props = FirstPageProps &
  WithStyles<ClassKeys> &
  RouteComponentProps<{ step: string }>;

class Home extends React.PureComponent<Props> {
  public render() {
    const test = location.search;
    const { step } = this.props.match.params;
    return (
      <div className="App">
        {test}
        step:{step}
        <Button onClick={this.onClick1}>test1</Button>
        <Button onClick={this.onClick2}>test2</Button>
        <Button onClick={this.onClick3}>test3</Button>
      </div>
    );
  }
  private onClick1 = () => {
    this.props.history.push("./1?test=1");
  };
  private onClick2 = () => {
    this.props.history.push("./2?test=2");
  };
  private onClick3 = () => {
    this.props.history.push("./3?test=3");
  };
}

export default withStyles(styles)(Home);
