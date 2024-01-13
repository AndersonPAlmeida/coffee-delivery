import { createGlobalStyle } from 'styled-components'
import { stylesStandard } from './stylesStandard'

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
      color: ${({ theme }) => theme['base-text']};
      -webkit-font-smoothing: antialiased;

      &::-webkit-scrollbar {
         width: .8rem;
      }
      &::-webkit-scrollbar-track {
         background: transparent;
      }
      &::-webkit-scrollbar-thumb {
         background: ${({ theme }) => theme.yellow};
         border-radius: .8rem;
      }
   }

   a {
      text-decoration: none;
   }
   
   body, input, textarea, button{
      ${stylesStandard.fonts.textS}
   }

   button {
      border: 0;
      background-color: transparent;
      cursor: pointer;
   }
`
