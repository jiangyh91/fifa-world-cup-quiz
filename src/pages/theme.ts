import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';
import { Overrides } from '@material-ui/core/styles/overrides';

const typography: TypographyOptions = {
  // fontSize: 14,
  // headline: {
  //   fontSize: 32,
  //   lineHeight: '32px',
  //   fontWeight: 'bold'
  // },
  // title: {
  //   fontSize: 18,
  //   lineHeight: '22px',
  //   fontWeight: 'bold'
  // },
  // subheading: {
  //   fontSize: 18,
  //   lineHeight: '22px',
  //   fontWeight: 'bold'
  // }
};

const palette: PaletteOptions = {
  primary: {
    main: "rgb(255,234,0)",
    light: "rgba(255,234,0,0.1)",
    contrastText: "rgb(255,1,1)"
  }
  // secondary: {
  //   main: '#f50057',
  //   dark: '#c51162'
  // },
  // text: {
  //   // The most important text.
  //   primary: '#333333',
  //   // Secondary text.
  //   secondary: '#888888',
  //   // Disabled text have even lower visual prominence.
  //   disabled: '#888888'
  // },
  // action: {
  //   disabled: '#666666',
  //   disabledBackground: '#F2F2F2'
  // },
  // divider: '#D0D0D0',
  // grey: {
  //   50: '#fafafa', // table row background (if used)
  //   100: '#f2f2f2' // layout panels
  // }
};

const theme = createMuiTheme({
  typography,
  palette
});

const getOverrides = (theme: Theme): Overrides => {
  const overrides: Overrides = {
    MuiButton: {
      root: {
        border: `3px solid ${theme.palette.common.white}`,
        borderRadius: 10
      }
    }
  };
  return overrides;
};

const overrides = getOverrides(theme);
export default Object.assign(theme, { overrides });
