import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

import { sharedClassKeys, sharedStyles } from '../../styles';

export type ClassKeys = sharedClassKeys | "vsImageBox" | "vsImage";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  ...sharedStyles(theme),
  vsImageBox: {
    height: 64
    // width: "100%"
  },
  vsImage: {
    width: 100
  }
});

export default styles;
