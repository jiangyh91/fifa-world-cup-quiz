import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys =
  | "screen"
  | "main"
  | "backgroundColor"
  | "flex"
  | "footer";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  screen: {
    minHeight: "100%",
    minWidth: 295,
    position: "relative"
  },
  main: {
    width: "100%",
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
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100
  }
});

export default styles;
