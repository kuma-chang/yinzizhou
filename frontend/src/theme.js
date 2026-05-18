import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#060725',
      paper: '#090b2e',
    },
    primary: {
      main: '#C9A96E',       // gold — buttons, links, highlights
      light: '#E8D5B0',
      dark: '#8B6914',
      contrastText: '#060725',
    },
    secondary: {
      main: '#5B7FD4',       // blue accent — hover links, constellation color
      light: '#8A9FE8',
      dark: '#3D4B8A',
      contrastText: '#EEF0FA',
    },
    text: {
      primary: '#EEF0FA',
      secondary: '#8A8FAD',
      disabled: '#565A7A',
    },
    divider: 'rgba(255,255,255,0.07)',
    action: {
      hover: 'rgba(201,169,110,0.08)',
      selected: 'rgba(201,169,110,0.12)',
      disabledBackground: 'rgba(255,255,255,0.05)',
    },
  },

  typography: {
    fontFamily: '"Jost", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 300,
      fontSize: '4.5rem',
      lineHeight: 0.95,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 300,
      fontSize: '2.5rem',
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    h4: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 400,
      fontSize: '1.2rem',
    },
    subtitle1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontStyle: 'italic',
      fontWeight: 300,
      fontSize: '1.1rem',
      letterSpacing: '0.04em',
    },
    body1: {
      fontFamily: '"Jost", sans-serif',
      fontWeight: 300,
      fontSize: '0.875rem',
      lineHeight: 1.85,
    },
    body2: {
      fontFamily: '"Jost", sans-serif',
      fontWeight: 300,
      fontSize: '0.8rem',
      lineHeight: 1.7,
    },
    overline: {
      fontFamily: '"Jost", sans-serif',
      fontWeight: 400,
      fontSize: '0.65rem',
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: '#C9A96E',
    },
    caption: {
      fontFamily: '"Jost", sans-serif',
      fontSize: '0.7rem',
      letterSpacing: '0.18em',
      color: '#565A7A',
    },
  },

  shape: {
    borderRadius: 2,   // keeps the sharp, refined look from the mockup
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        body { background-color: #060725; }
      `,
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          textTransform: 'uppercase',
          letterSpacing: '0.22em',
          fontSize: '0.65rem',
          fontWeight: 500,
          fontFamily: '"Jost", sans-serif',
          padding: '12px 28px',
        },
        contained: {
          backgroundColor: '#C9A96E',
          color: '#060725',
          '&:hover': { backgroundColor: '#E8D5B0' },
        },
        outlined: {
          borderColor: 'rgba(201,169,110,0.22)',
          color: '#8A8FAD',
          '&:hover': {
            borderColor: '#C9A96E',
            color: '#C9A96E',
            backgroundColor: 'rgba(201,169,110,0.08)',
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(6,7,37,0.8)',
          backdropFilter: 'blur(16px)',
          borderBottom: '0.5px solid rgba(255,255,255,0.07)',
          boxShadow: 'none',
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgba(9,11,46,0.97)',
          backdropFilter: 'blur(24px)',
          borderLeft: '0.5px solid rgba(201,169,110,0.2)',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(13,16,64,0.5)',
          border: '0.5px solid rgba(255,255,255,0.07)',
          borderRadius: 2,
          boxShadow: 'none',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: 'rgba(13,16,64,0.8)',
            '& fieldset': { borderColor: 'rgba(255,255,255,0.07)', borderWidth: '0.5px' },
            '&:hover fieldset': { borderColor: 'rgba(201,169,110,0.22)' },
            '&.Mui-focused fieldset': { borderColor: '#C9A96E', borderWidth: '0.5px' },
          },
          '& .MuiInputLabel-root': { color: '#565A7A', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase' },
          '& .MuiInputLabel-root.Mui-focused': { color: '#C9A96E' },
          '& .MuiOutlinedInput-input': { color: '#EEF0FA', fontFamily: '"Jost", sans-serif', fontWeight: 300 },
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(255,255,255,0.07)' },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          fontSize: '0.6rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          border: '0.5px solid rgba(201,169,110,0.22)',
          color: '#C9A96E',
          backgroundColor: 'rgba(201,169,110,0.08)',
        },
      },
    },
  },
});

export default theme;
