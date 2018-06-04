import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

import { sharedClassKeys, sharedStyles } from '../../styles';

export type ClassKeys = sharedClassKeys;

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  ...sharedStyles(theme)
});

export default styles;
