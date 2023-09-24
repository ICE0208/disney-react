// my-theme.ts
import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  hightlightColor: '#1892df',
  bgColor: '#3d9af1',
  mainTextColor: 'whitesmoke',
  hoverTextColor: 'black',
  hoverBgColor: 'whitesmoke',
  hoverBorderColor: 'black',
};

const darkTheme: DefaultTheme = {
  hightlightColor: '#4580b7',
  bgColor: '#194764',
  mainTextColor: 'black',
  hoverTextColor: 'whitesmoke',
  hoverBgColor: 'black',
  hoverBorderColor: 'whitesmoke',
};

export { lightTheme, darkTheme };
