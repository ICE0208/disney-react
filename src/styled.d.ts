// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    headerColor: string;
    bgColor: string;
    mainTextColor: string;
    hoverTextColor: string;
    hoverBgColor: string;
    hoverBorderColor: string;
  }
}