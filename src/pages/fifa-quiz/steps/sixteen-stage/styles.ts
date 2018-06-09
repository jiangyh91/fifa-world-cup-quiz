import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

import { sharedClassKeys, sharedStyles } from '../../styles';

export type ClassKeys = sharedClassKeys | "vsImageBox";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  ...sharedStyles(theme),
  vsImageBox: {
    height: 64
  }
});

export default styles;
