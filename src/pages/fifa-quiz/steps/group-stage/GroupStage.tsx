import * as classNames from 'classnames';
import * as React from 'react';

import { Button, Checkbox, List, ListItem, ListItemSecondaryActi, ListItem, Avatar, ListItemText, ListItemSecondaryAction, Checkbox, ListItem, Avatar, ListItemText, ListItemSecondaryAction, Checkboxon, ListItemText, Paper, Typography, WithStyles, withStyles } from '@material-ui/core';

import Screen from 'src/components/screen';

import StepFlag from '../../../../components/step-flag';
import tadaball from './images/tadaball.png';
import styles, { ClassKeys } from './styles';

interface groupStageProps {
  onNext(
    event: React.SyntheticEvent<HTMLButtonElement>,
    nextStepValue: number
  ): void;
}

type Props = groupStageProps & WithStyles<ClassKeys>;

class groupStage extends React.PureComponent<Props> {
  public render() {
    const { classes } = this.props;
    return (
      <Screen footer>
        <StepFlag step={2} />
        <Typography variant="headline" className={classes.headline}>
          游戏规则
        </Typography>
        <div className={classes.paper}>
          <div className={classNames(classes.point, classes.red)}>
            <span>第一轮：</span>
            <span className={classNames(classes.black)}>
              选择小组第一及小组第二，进入16强,
            </span>
            <span>猜中即可累计20小时PTE</span>
          </div>
          <Paper elevation={0}>
            <List>
              {[0, 1, 2, 3].map(value => (
                <ListItem key={value} dense button>
                  {/* <Avatar alt="Remy Sharp" src={tadaball} /> */}
                  <ListItemText primary={`Line item ${value + 1}`} />
                  <ListItemSecondaryAction>
                    <Checkbox
                    // onChange={this.handleToggle(value)}
                    // checked={this.state.checked.indexOf(value) !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={this.handleOnNextClick}
          >
            进入十六强
          </Button>
        </div>
        <img src={tadaball} className={classes.cornerImage} alt="tadaball" />
      </Screen>
    );
  }

  private handleOnNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.props.onNext(event, 3);
  };
}

export default withStyles(styles)(groupStage);
