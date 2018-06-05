import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys = "root";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  root: {}
});

export default styles;

export type sharedClassKeys =
  | "paper"
  | "headline"
  | "point"
  | "button"
  | "cornerImage"
  | "red"
  | "black";
export const sharedStyles: StyleRulesCallback<sharedClassKeys> = (
  theme: Theme
) => ({
  paper: {
    margin: "2px 5%",
    padding: 12,
    borderRadius: 8,
    background: "rgba(124,127,125, 0.1)",
    minHeight: 360
  },
  headline: {
    textAlign: "center",
    fontStyle: "italic"
  },
  point: {
    margin: 0,
    lineHeight: "26px",
    fontWeight: "bold",
    fontStyle: "italic"
  },
  button: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  cornerImage: {
    height: 140,
    float: "right",
    paddingBottom: 28,
    paddingRight: 24
  },
  red: {
    color: "rgb(254,28,28)"
  },
  black: {
    color: theme.palette.common.black
  }
});
