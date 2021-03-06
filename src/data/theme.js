import { createMuiTheme } from '@material-ui/core';

const HOVER_EFFECT = { '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.08)' } };
// const BREAKALL = {
//   overflowWrap: 'anywhere',
//   wordBreak: 'break-all',
//   whiteSpace: 'pre-wrap',
// };

// todo: primary, secondary의 light/dark와, waring, info, success, error 결정
export default createMuiTheme({
  props: {
    MuiCheckbox: { color: 'primary' },
    MuiRadio: { color: 'primary' },
  },

  palette: {
    primary: { main: '#1a90ff' },
    secondary: { main: '#ff1a90' },
    error: { main: '#EC4C47' },
  },

  typography: {
    fontFamily: 'Noto Sans KR, sans-serif',
    body2: { fontSize: '0.75rem', lineHeight: 1.5 },
  },

  overrides: {
    MuiBottomNavigation: {
      root: {
        width: '100%',
        flex: 'none',
        overflow: 'hidden',
        backgroundColor: '#f2f2f2',
      },
    },
    MuiBottomNavigationAction: {
      root: { ...HOVER_EFFECT, minWidth: null },
    },
    MuiTabs: {
      flexContainer: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.6)',
        letterSpacing: 0.65,
      },
    },
    MuiTab: {
      root: {
        ...HOVER_EFFECT,
        textTransform: null,
        '&.Mui-selected': {
          color: '#0896B4',
          '&:hover': { backgroundColor: 'rgba(8, 150, 180, 0.08)' }, // #0896B4 + 0.08
        },
      },
      textColorInherit: { opacity: null },
    },
    MuiCard: { root: { overflow: null } },
    MuiDivider: { root: { margin: '1rem 0' } },
    MuiFab: { root: { width: '3.5rem', height: '3.5rem' } },
    MuiToolbar: {
      regular: { '@media (min-width: 600px)': { minHeight: '4rem' } },
    },
    MuiChip: {
      root: { '& $avatarSmall': { width: '1.125rem', height: '1.125rem' } },
      sizeSmall: { height: '1.5rem' },
    },
  },
});
