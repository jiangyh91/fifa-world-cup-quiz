import * as classNames from 'classnames';
import * as React from 'react';

import { Button, Paper, Typography, WithStyles, withStyles } from '@material-ui/core';

import Screen from 'src/components/screen';

import StepFlag from '../../../../components/step-flag';
import cupImage from './images/cup.png';
import styles, { ClassKeys } from './styles';

interface IntroProps {
  onNext(
    event: React.SyntheticEvent<HTMLButtonElement>,
    nextStepValue: number
  ): void;
}

type Props = IntroProps & WithStyles<ClassKeys>;

class Intro extends React.PureComponent<Props> {
  public render() {
    const { classes } = this.props;
    return (
      <Screen footer>
        <StepFlag step={1} />
        <Typography variant="headline" className={classes.headline}>
          游戏规则
        </Typography>
        <Paper className={classes.paper} elevation={0}>
          <div className={classNames(classes.point, classes.red)}>
            <div>如何参与?</div>
            <div className={classes.black}>
              <div>
                6月14日前无分组屏蔽分享到朋友圈，并截图发给通小成即可参与
              </div>
              <div>
                分享即可获得<span className={classes.red}>免费工签</span>或<span
                  className={classes.red}
                >
                  5小时PTE课程
                </span>
              </div>
            </div>
            <div className={classNames(classes.paragraph, classes.bigFont)}>
              <span>终极大奖: </span>
              <span className={classes.black}>
                凡猜中所有线路图，通成负 责你的所有签证，PY、CCL、PTE所有课程
              </span>
            </div>
            <div className={classNames(classes.bigFont)}>
              <span>冠军章鱼哥：</span>
              <span className={classes.black}>
                凡猜中冠军，即获免费工签/PR+10小时PTE+电影票两张
              </span>
            </div>
          </div>
          <div className={classes.paragraph}>
            <div
              className={classNames(classes.point, classes.border, classes.red)}
            >
              <div>累计积分换PTE课程</div>
              <div className={classNames(classes.smallFont, classes.black)}>
                猜中16强或8强，分别累计积分20小时PTE课程
              </div>
              <div className={classNames(classes.smallFont, classes.black)}>
                猜中4强或2强，分别累计积分10小时PTE课程
              </div>
            </div>
          </div>
          <div
            className={classNames(
              classes.point,
              classes.red,
              classes.paragraph,
              classes.smallFont
            )}
          >
            注：参与奖以及猜中冠军所获的PTE时长也可作为累计
          </div>
          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            onClick={this.handleOnNextClick}
          >
            开始小组赛
          </Button>
        </Paper>
        <img src={cupImage} className={classes.cornerImage} alt="cupImage" />
      </Screen>
    );
  }

  private handleOnNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.props.onNext(event, 2);
  };
}

export default withStyles(styles)(Intro);
