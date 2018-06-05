import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

import sixteenStyles, { ClassKeys as SixteenClassKeys } from '../sixteen-stage/styles';

export type ClassKeys = SixteenClassKeys;

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  ...sixteenStyles(theme)
});

export default styles;
