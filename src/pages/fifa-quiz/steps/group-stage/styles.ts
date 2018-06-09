import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

import { sharedClassKeys, sharedStyles } from '../../styles';

export type ClassKeys =
  | sharedClassKeys
  | "group"
  | "groupHeader"
  | "teamButton"
  | "bottomLeftRadius"
  | "bottomRightRadius"
  | "teamName"
  | "checkedButton"
  | "checkBox"
  | "unchecked"
  | "checked"
  | "marginBottom";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  ...sharedStyles(theme),
  "$point + $group": {
    marginTop: 20
  },

  group: {
    marginBottom: 16,
    borderRadius: 8
  },
  groupHeader: {
    lineHeight: "38px",
    background: theme.palette.grey[100],
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px"
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
  bottomLeftRadius: {
    borderBottomLeftRadius: "8px"
  },
  bottomRightRadius: {
    borderBottomRightRadius: "8px"
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
  },
  marginBottom: {
    marginBottom: 20
  }
});

export default styles;
