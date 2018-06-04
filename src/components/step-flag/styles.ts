import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys = "container" | "text" | "stepImage";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  container: {
    position: "relative",
    marginBottom: -36
  },
  text: {
    position: "absolute",
    top: 2,
    left: 52,
    fontSize: 24,
    fontWeight: "bold",
    color: "rgb(254,28,28)"
  },
  stepImage: {
    width: 150,
    marginLeft: 20
  }
});

export default styles;
