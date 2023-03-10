import 'styled-components';
import theme from '../styles/theme'

declare module 'styled-components' {
  type themeType = typeof theme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends themeType {}
}