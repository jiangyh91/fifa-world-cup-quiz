import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys =
  | "button"
  | "paper"
  | "logoImage"
  | "descImage"
  | "tadaImage"
  | "starImage1"
  | "starImage2";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  button: {
    display: "block",
    margin: "50px auto 20px",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic"
  },
  paper: {
    width: 250,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: "100%/100%",
    boxSizing: "border-box",
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative"
  },
  logoImage: {
    width: "100%",
    padding: "40px 5% 0px",
    boxSizing: "border-box"
  },
  descImage: {
    width: 160
  },
  tadaImage: {
    width: 70,
    top: -8,
    left: -26,
    position: "absolute"
  },
  starImage1: {
    position: "absolute",
    left: "65%",
    top: 0,
    transform: "rotate(-55deg)",
    width: "38%"
  },
  starImage2: {
    position: "absolute",
    top: "69%",
    left: "42%",
    width: "69%",
    transform: " rotate(-55deg)",
    opacity: 0.6
  }
});

export default styles;
