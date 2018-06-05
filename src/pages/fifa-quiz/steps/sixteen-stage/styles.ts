import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

import { sharedClassKeys, sharedStyles } from '../../styles';

export type ClassKeys =
  | sharedClassKeys
  | "teamButton"
  | "group"
  | "teamName"
  | "checkedButton"
  | "textShadow";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  ...sharedStyles(theme),
  group: {
    marginBottom: 16
  },
  teamButton: {
    width: "50%",
    height: 56,
    paddingLeft: 10,
    paddingRight: 10,
    background: theme.palette.grey[100],
    "& + $teamButton": {
      borderLeft: `1px solid ${theme.palette.divider}`
    }
  },
  checkedButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" //"rgba(254,28,28, 0.4)" //"rgba(255,234,0, 0.3)"
  },
  teamName: {
    fontSize: 16,
    flexGrow: 1
  },
  textShadow: {
    fontSize: 30,
    textShadow: "1px 1px 0 yellow, 2px 2px 0 grey"
  }
});

export default styles;
