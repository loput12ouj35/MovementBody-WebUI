import { createMuiTheme } from '@material-ui/core';

const HOVER_EFFECT = { '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.08)' } };
const BREAKALL = {
  overflowWrap: 'anywhere',
  wordBreak: 'break-all',
  whiteSpace: 'pre-wrap',
};

// todo: primary, secondary의 light/dark와, waring, info, success, error 결정
export default createMuiTheme({
  props: {
    MuiCheckbox: { color: 'primary' },
    MuiRadio: { color: 'primary' },
  },

  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: 'rgb(220, 0, 78)' },
    error: { main: '#EC4C47' },
  },

  // typography: { fontFamily: 'Noto Sans KR, sans-serif' },

  overrides: {
    // 탭
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
  },
});