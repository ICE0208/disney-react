// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    hightlightColor: string;
    bgColor: string;
    mainTextColor: string;
    boxTextColor: string;
    boxBgColor: string;
    boxBorderColor: string;
  }
}
