import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

import { sharedClassKeys, sharedStyles } from '../../styles';

export type ClassKeys =
  | sharedClassKeys
  | "group"
  | "groupHeader"
  | "teamButton"
  | "teamName"
  | "checkedButton"
  | "checkBox"
  | "unchecked"
  | "checked";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  ...sharedStyles(theme),
  group: {
    marginBottom: 16
  },
  groupHeader: {
    lineHeight: "38px",
    background: theme.palette.grey[100]
  },
  teamButton: {
    width: "50%",
    height: 34,
    paddingLeft: 6,
    background: theme.palette.grey[100],
    "& + $teamButton": {
      borderLeft: `1px solid ${theme.palette.divider}`
    }
  },
  checkedButton: {
    background: theme.palette.common.white
  },
  teamName: {
    flexGrow: 1
  },
  checkBox: {
    height: 18,
    width: 18,
    marginRight: 6,
    lineHeight: "18px"
  },
  unchecked: {
    border: `2px solid ${theme.palette.text.secondary}`,
    borderRadius: 2,
    boxSizing: "border-box"
  },
  checked: {
    background: "rgb(254,28,28)",
    borderRadius: 2,
    color: theme.palette.common.white
  }
});

export default styles;
