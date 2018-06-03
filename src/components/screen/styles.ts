import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys = "screen" | "root" | "backgroundColor" | "flex";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  screen: {
    minHeight: "100%",
    minWidth: 295
  },
  root: {
    maxWidth: 768,
    position: "relative"
  },
  backgroundColor: {
    background: "linear-gradient(45deg, #fe0b0b 30%, #fa5d5d 90%)"
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default styles;
