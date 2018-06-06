import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

import { sharedClassKeys, sharedStyles } from '../../styles';

export type ClassKeys = sharedClassKeys | "paragraph" | "border" | "bigFont" | "smallFont" | "bigTitle";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  ...sharedStyles(theme),
  paragraph: {
    marginTop: 12
  },
  border: {
    border: "1px solid",
    borderColor: "rgb(254,28,28)",
    borderRadius: 4,
    padding: "0px 4px"
  },
  bigFont: {
    fontSize: 18,
    lineHeight: "28px"
  },
  smallFont: {
    fontSize: 14,
    lineHeight: "24px"
  },
  bigTitle: {
    fontSize: 24
  }
});

export default styles;
