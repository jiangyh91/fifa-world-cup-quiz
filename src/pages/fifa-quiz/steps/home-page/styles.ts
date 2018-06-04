import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys =
  | "button"
  | "paper"
  | "logoImage"
  | "descImage"
  | "tadaImage"
  | "starImage1"
  | "starImage2"
  | "starImage3";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  button: {
    margin: 24
  },
  paper: {
    margin: 20,
    width: 250,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: "100%/100%",
    position: "relative"
  },
  logoImage: {
    width: "95%"
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
    top: "66%",
    left: "42%",
    width: "69%",
    transform: " rotate(-55deg)",
    opacity: 0.6
  },
  starImage3: {
    position: "absolute",
    top: "77%",
    left: "3%",
    width: "58%",
    transform: " rotate(-55deg)"
  }
});

export default styles;
