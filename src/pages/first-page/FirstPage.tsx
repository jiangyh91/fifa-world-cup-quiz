import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import logo from './logo.svg';
import styles, { ClassKeys } from './styles';

import './FirstPage.css';

interface FirstPageProps {}

type Props = FirstPageProps & WithStyles<ClassKeys>;
class FirstPage extends React.PureComponent<Props> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <Button>test</Button>
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(FirstPage);
