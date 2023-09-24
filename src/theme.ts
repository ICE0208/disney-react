// my-theme.ts
import { DefaultTheme } from 'styled-components';

const BLACK = '#181818';

const lightTheme: DefaultTheme = {
  hightlightColor: '#1892df',
  bgColor: '#3d9af1',
  mainTextColor: 'whitesmoke',
  boxTextColor: BLACK,
  boxBgColor: 'whitesmoke',
  boxBorderColor: BLACK,
};

const darkTheme: DefaultTheme = {
  hightlightColor: '#246aab',
  bgColor: '#2b74a3',
  mainTextColor: 'whitesmoke',
  boxTextColor: 'whitesmoke',
  boxBgColor: BLACK,
  boxBorderColor: 'whitesmoke',
};

export { lightTheme, darkTheme };
