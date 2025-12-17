import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#021B79',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0088FF',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#FFFFFF',
      contrastText: '#021B79',
    },
    action: {
      disabled: 'rgba(0, 0, 0, 0.38)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
  typography: {
    fontFamily: "'Maven Pro', -apple-system, Roboto, Helvetica, sans-serif",
    button: {
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          fontWeight: 700,
          fontFeatureSettings: "'liga' off, 'clig' off",
          textTransform: 'uppercase',
        },
        sizeLarge: {
          fontSize: '14px',
          lineHeight: '24px',
          letterSpacing: '0.46px',
          padding: '8px 22px',
          height: '64px',
        },
        sizeMedium: {
          fontSize: '13px',
          lineHeight: '22px',
          letterSpacing: '0.4px',
          padding: '6px 16px',
          height: '62px',
        },
        sizeSmall: {
          fontSize: '12px',
          lineHeight: '21px',
          letterSpacing: '0.46px',
          padding: '4px 10px',
          height: '61px',
        },
        contained: {
          boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
          '&:hover': {
            boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
          },
          '&:focus': {
            boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
  },
});
