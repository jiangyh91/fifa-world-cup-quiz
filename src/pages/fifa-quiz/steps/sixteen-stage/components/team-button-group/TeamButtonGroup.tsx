import * as classNames from 'classnames';
import * as React from 'react';

import { ButtonBase, Paper, WithStyles, withStyles } from '@material-ui/core';
import { dataAttribute } from 'src/utils/domHelper';

import FlexLayout from 'src/components/flex-layout';

import { flagMapping } from '../../../group-stage/models';
import styles, { ClassKeys } from './styles';

interface TeamButtonGroupProps {
  winnerArray: Array<string>;
  teamsArray: Array<Array<string>>;
  onClick(event: React.MouseEvent<HTMLButtonElement>, winnerArray: Array<string>): void;
}

type Props = TeamButtonGroupProps & WithStyles<ClassKeys>;

interface States {}
class TeamButtonGroup extends React.PureComponent<Props, States> {
  render() {
    const { teamsArray } = this.props;
    return teamsArray.map(this.renderGroup);
  }

  renderGroup = (teams: Array<string>, index: number) => {
    const { classes, winnerArray } = this.props;
    const winnerValue = winnerArray[index]; // resolveTeamValue(groupStageValues, groupIndex, teamName);
    return (
      <Paper className={classes.group} key={teams[0]}>
        <React.Fragment>
          <FlexLayout>
            <ButtonBase
              className={classNames(classes.teamButton, winnerValue === teams[0] && classes.checkedButton)}
              data-group-index={index}
              data-team-name={teams[0]}
              onClick={this.handleOnTeamClick}
            >
              <img src={flagMapping[teams[0]]} alt={teams[0]} />
              <div className={classes.teamName}>{teams[0]}</div>
            </ButtonBase>
            <ButtonBase
              className={classNames(classes.teamButton, winnerValue === teams[1] && classes.checkedButton)}
              data-group-index={index}
              data-team-name={teams[1]}
              onClick={this.handleOnTeamClick}
            >
              <div className={classes.teamName}>{teams[1]}</div>
              <img src={flagMapping[teams[1]]} alt={teams[1]} />
            </ButtonBase>
          </FlexLayout>
        </React.Fragment>
      </Paper>
    );
  };

  private handleOnTeamClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const groupIndex = Number(dataAttribute("group-index", event) || 0);
    const targetTeamName = dataAttribute("team-name", event) || "";

    const { winnerArray } = this.props;
    if (winnerArray[groupIndex] !== targetTeamName) {
      winnerArray[groupIndex] = targetTeamName;
      this.props.onClick(event, winnerArray.concat());
    }
  };
}

export default withStyles(styles)(TeamButtonGroup);
