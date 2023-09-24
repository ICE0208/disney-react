// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    mainTextColor: string;
    boxTextColor: string;
    boxColor: string;
  }
}
