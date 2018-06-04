import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

import { sharedClassKeys, sharedStyles } from '../../styles';

export type ClassKeys =
  | sharedClassKeys
  | "paragraph"
  | "border"
  | "bigFont"
  | "smallFont";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  ...sharedStyles(theme),
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
  }
});

export default styles;
