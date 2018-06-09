import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys = "teamButton" | "group" | "teamName" | "checkedButton";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  group: {
    marginBottom: 16,
    borderRadius: "8px"
  },
  teamButton: {
    width: "50%",
    height: 56,
    paddingLeft: 10,
    paddingRight: 10,
    background: theme.palette.grey[100],
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    "& + $teamButton": {
      borderLeft: `1px solid ${theme.palette.divider}`,
      borderRadius: "8px",
      borderTopLeftRadius: "unset",
      borderBottomLeftRadius: "unset"
    }
  },
  checkedButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" //"rgba(254,28,28, 0.4)" //"rgba(255,234,0, 0.3)"
  },
  teamName: {
    fontSize: 16,
    flexGrow: 1
  }
});

export default styles;
