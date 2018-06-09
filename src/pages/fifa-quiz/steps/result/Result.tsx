import * as classNames from 'classnames';
import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core';
import * as html2canvas from 'html2canvas';

import FlexLayout from 'src/components/flex-layout';
import Screen from 'src/components/screen';

import { dataAttribute } from '../../../../utils/domHelper';
import { flagMapping, teamGroups } from '../group-stage/models';
import { prepareSixteenTeams } from '../sixteen-stage/helpers';
import gameQrcode from './images/game-qrcode.png';
import qrcode from './images/qrcode.jpg';
import share from './images/share.png';
import styles, { ClassKeys } from './styles';

interface ResultProps {
  values: Array<any>;
  onNext(nextStepValue: number, value?: any): void;
}

type Props = ResultProps & WithStyles<ClassKeys>;

interface States {
  canvas?: HTMLCanvasElement;
}

class Result extends React.PureComponent<Props, States> {
  private step = 7;

  private sixteenTeams: Array<Array<string>> = prepareSixteenTeams(this.props.values[2]) || [];
  private eightTeams: Array<string> = this.props.values[3] || [];
  private fourTeams: Array<string> = this.props.values[4] || [];
  private twoTeams: Array<string> = this.props.values[5] || [];
  private winner: Array<string> = this.props.values[6] || [];

  private imagesLoaded: Array<boolean> = [false, false];

  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (!this.props.values[1]) {
      this.props.onNext(-1);
    }
  }

  public render() {
    const { classes } = this.props;
    const { canvas } = this.state;
    return (
      <Screen background flex>
        {this.renderCanvas()}
        <FlexLayout className={classes.headerImageBox} alignItems="center">
          <img
            src={share}
            className={classes.headerImage}
            alt="share_header"
            data-image-id="0"
            onLoad={this.handleOnImageLoad}
          />
        </FlexLayout>
        <FlexLayout className={classes.resultImage}>
          {this.renderLeftEightName()}
          {this.renderLeftEightFlag()}
          {this.renderLeftFourFlag()}
          {this.renderLeftTwoFlag()}
          {this.renderWinner()}
          {this.renderRightTwoFlag()}
          {this.renderRightFourFlag()}
          {this.renderRightEightFlag()}
          {this.renderRightEightName()}
        </FlexLayout>
        <FlexLayout className={classes.qrcodeBox} alignItems="center">
          <img
            className={classes.qrcode}
            src={gameQrcode}
            alt="qrcode"
            data-image-id="1"
            onLoad={this.handleOnImageLoad}
          />
          <div className={classNames(classes.qrcodeDesc, classes.qrcodeDescBold)}>
            长按二维码，开始你的世界杯之旅，立即拿免费工签，PR，还有5万澳元终极大奖等你来！
          </div>
        </FlexLayout>
      </Screen>
    );
  }

  private renderLeftEightName() {
    const { classes } = this.props;
    return (
      <div className={classes.groupIdColumn}>
        {teamGroups.map((group, index) => (
          <div className={classes.leftGroupId} key={group.name}>
            {group.name + (index % 2 === 0 ? 1 : 2)}
          </div>
        ))}
      </div>
    );
  }

  private renderLeftEightFlag() {
    const { classes } = this.props;
    const length = this.sixteenTeams.length / 2;
    const result = [];
    for (let i = 0; i < length; i++) {
      const group = this.sixteenTeams[i];
      const team0 = group[0];
      const team1 = group[1];
      result.push(
        <React.Fragment key={team0 + team1 + "_16"}>
          <div
            className={classNames(
              classes.border,
              classes.topRightBorder,
              this.winner[0] === team0 && classes.winnerBorder
            )}
            key={team0 + "_16"}
          >
            <FlexLayout className={classes.flagBox} flexDirection="column" alignItems="center">
              {<img src={flagMapping[team0]} />}
              <div className={classes.countryName}>{team0}</div>
            </FlexLayout>
          </div>
          <div
            className={classNames(
              classes.border,
              classes.bottomRightBorder,
              this.winner[0] === team1 && classes.winnerBorder
            )}
            key={team1 + "_16"}
          >
            <FlexLayout className={classes.flagBox} flexDirection="column" alignItems="center">
              {<img src={flagMapping[team1]} />}
              <div className={classes.countryName}>{team1}</div>
            </FlexLayout>
          </div>
        </React.Fragment>
      );
    }
    return <div className={classNames(classes.resultColumn, classes.leftEight)}>{result}</div>;
  }

  private renderLeftFourFlag() {
    const { classes } = this.props;
    const length = this.eightTeams.length / 2;
    const result = [];
    for (let i = 0; i < length; i++) {
      const team = this.eightTeams[i];
      result.push(
        <div
          className={classNames(
            classes.border,
            i % 2 === 0 ? classes.topRightBorder : classes.bottomRightBorder,
            this.winner[0] === team && classes.winnerBorder
          )}
          key={team + "_4"}
        >
          {<img className={classes.flag} src={flagMapping[team]} />}
        </div>
      );
    }
    return <div className={classNames(classes.resultColumn, classes.leftFour)}>{result}</div>;
  }

  private renderLeftTwoFlag() {
    const { classes } = this.props;
    const length = this.fourTeams.length / 2;
    const result = [];
    for (let i = 0; i < length; i++) {
      const team = this.fourTeams[i];
      result.push(
        <div
          className={classNames(
            classes.border,
            i % 2 === 0 ? classes.topRightBorder : classes.bottomRightBorder,
            this.winner[0] === team && classes.winnerBorder
          )}
          key={team + "_2"}
        >
          {<img className={classes.flag} src={flagMapping[team]} />}
        </div>
      );
    }
    return <div className={classNames(classes.resultColumn, classes.leftTwo)}>{result}</div>;
  }

  private renderWinner() {
    const { classes } = this.props;
    const team0 = this.twoTeams[0];
    const team1 = this.twoTeams[1];
    const winner = this.winner[0];
    return (
      <React.Fragment>
        <div className={classes.resultColumn}>
          <div
            className={classNames(
              classes.border,
              classes.bottomRightBorder,
              classes.leftOne,
              this.winner[0] === team0 && classes.winnerBorder
            )}
          >
            <img className={classes.flag} src={flagMapping[team0]} />
          </div>
        </div>

        <div className={classNames(classes.resultColumn, classes.winner)}>
          {<img className={classes.flag} src={flagMapping[winner]} />}
        </div>
        <div className={classes.resultColumn}>
          <div
            className={classNames(
              classes.border,
              classes.bottomLeftBorder,
              classes.rightOne,
              this.winner[0] === team1 && classes.winnerBorder
            )}
          >
            <img className={classes.flag} src={flagMapping[team1]} />
          </div>
        </div>
      </React.Fragment>
    );
  }

  private renderRightTwoFlag() {
    const { classes } = this.props;
    const length = this.fourTeams.length;
    const start = length / 2;
    const result = [];
    for (let i = start; i < length; i++) {
      const team = this.fourTeams[i];
      result.push(
        <div
          className={classNames(
            classes.border,
            i % 2 === 0 ? classes.topLeftBorder : classes.bottomLeftBorder,
            this.winner[0] === team && classes.winnerBorder
          )}
          key={team + "_2"}
        >
          <img className={classes.flag} src={flagMapping[team]} />
        </div>
      );
    }
    return <div className={classNames(classes.resultColumn, classes.rightTwo)}>{result}</div>;
  }

  private renderRightFourFlag() {
    const { classes } = this.props;
    const length = this.eightTeams.length;
    const start = length / 2;
    const result = [];
    for (let i = start; i < length; i++) {
      const team = this.eightTeams[i];
      result.push(
        <div
          className={classNames(
            classes.border,
            i % 2 === 0 ? classes.topLeftBorder : classes.bottomLeftBorder,
            this.winner[0] === team && classes.winnerBorder
          )}
          key={team + "_4"}
        >
          <img className={classes.flag} src={flagMapping[team]} />
        </div>
      );
    }
    return <div className={classNames(classes.resultColumn, classes.rightFour)}>{result}</div>;
  }

  private renderRightEightFlag() {
    const { classes } = this.props;
    const length = this.sixteenTeams.length;
    const start = length / 2;
    const result = [];
    for (let i = start; i < length; i++) {
      const group = this.sixteenTeams[i];
      const team0 = group[0];
      const team1 = group[1];
      result.push(
        <React.Fragment key={team0 + team1 + "_16"}>
          <div
            className={classNames(
              classes.border,
              classes.topLeftBorder,
              this.winner[0] === team0 && classes.winnerBorder
            )}
            key={team0 + "_16"}
          >
            <FlexLayout className={classes.flagBox} flexDirection="column" alignItems="center">
              {<img src={flagMapping[team0]} />}
              <div className={classes.countryName}>{team0}</div>
            </FlexLayout>
          </div>
          <div
            className={classNames(
              classes.border,
              classes.bottomLeftBorder,
              this.winner[0] === team1 && classes.winnerBorder
            )}
            key={team1 + "_16"}
          >
            <FlexLayout className={classes.flagBox} flexDirection="column" alignItems="center">
              {<img src={flagMapping[team1]} />}
              <div className={classes.countryName}>{team1}</div>
            </FlexLayout>
          </div>
        </React.Fragment>
      );
    }
    return <div className={classNames(classes.resultColumn, classes.rightEight)}>{result}</div>;
  }

  private renderRightEightName() {
    const { classes } = this.props;
    return (
      <div className={classes.groupIdColumn}>
        {teamGroups.map((group, index, array) => (
          <div className={classes.rightGroupId} key={group.name}>
            {index % 2 === 0 ? array[index + 1].name + 1 : array[index - 1].name + 2}
          </div>
        ))}
      </div>
    );
  }

  private renderCanvas() {
    const { classes } = this.props;
    const { canvas } = this.state;
    if (!!canvas) {
      return (
        <div className={classes.canvasBox}>
          <img className={classes.canvas} src={canvas.toDataURL()} alt="canvas" />
          <FlexLayout flexDirection="column" alignItems="center" className={classes.qrcodeFloat}>
            <div className={classNames(classes.qrcodeTitle, classes.qrcodeDesc)}>长按以上预测图保存到相册</div>
            <FlexLayout className={classNames(classes.qrcodeBox)} alignItems="center">
              <img className={classes.qrcode} src={qrcode} alt="qrcode" />
              <div className={classes.qrcodeDesc}>扫码通小成，免费工签、PR、PTE课程立即到手！</div>
            </FlexLayout>
          </FlexLayout>
        </div>
      );
    }
    return undefined;
  }

  private handleOnImageLoad = (event: React.UIEvent<HTMLImageElement>) => {
    event.preventDefault();
    if (!this.props.values[1]) {
      return;
    }
    const imageId = dataAttribute("image-id", event) || "";
    console.log(imageId);
    this.imagesLoaded[imageId] = true;
    const finished = this.imagesLoaded[0] && this.imagesLoaded[1];
    if (finished) {
      setTimeout(() => {
        let node = document.getElementById("screen-with-background") as HTMLElement;
        html2canvas(node, { scale: 2 })
          .then((canvas: HTMLCanvasElement) => {
            console.log(canvas);
            this.setState({ canvas });
          })
          .catch(function(error: any) {
            console.error("html to canvas failed", error);
          });
      }, 100);
    }
  };
}

export default withStyles(styles)(Result);
