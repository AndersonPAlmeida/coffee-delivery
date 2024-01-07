import { createGlobalStyle } from 'styled-components'
import { textStyle } from './textStyle'

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root {
      font-size: 62.5%;
   }

   body {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme['base-title']};
      padding: 0 1rem;
      -webkit-font-smoothing: antialiased;
   }

   a {
      text-decoration: none;
   }
   
   body, input, textarea, button{
      ${textStyle.fonts.textS}
      font-size: 1.4rem;
      line-height: 130%;
      font-weight: 400;
   }
`
