import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys =
  | "paper"
  | "headline"
  | "point"
  | "paragraph"
  | "border"
  | "bigFont"
  | "smallFont"
  | "red"
  | "black"
  | "button"
  | "cupImage";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  paper: {
    margin: "2px 24px",
    padding: 12,
    borderRadius: 8,
    background: "rgba(124,127,125, 0.1)"
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
  paragraph: {
    marginTop: 12
  },
  border: {
    border: "1px solid",
    borderColor: "rgb(254,28,28)",
    borderRadius: 4
  },
  bigFont: {
    fontSize: 18,
    lineHeight: "28px"
  },
  smallFont: {
    fontSize: 14,
    lineHeight: "24px"
  },
  red: {
    color: "rgb(254,28,28)"
  },
  black: {
    color: theme.palette.common.black
  },
  button: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  cupImage: {
    height: 140,
    float: "right",
    paddingBottom: 28,
    paddingRight: 24
  }
});

export default styles;
