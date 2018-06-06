import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

import sixteenStyles, { ClassKeys as SixteenClassKeys } from '../sixteen-stage/styles';

export type ClassKeys = SixteenClassKeys | "worldcup";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  ...sixteenStyles(theme),
  worldcup: {
    height: 150,
    paddingLeft: 10
  },

  button: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30
  }
});

export default styles;
