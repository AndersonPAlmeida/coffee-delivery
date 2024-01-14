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

   body, input, textarea, button{
      ${stylesStandard.fonts.textS}
      color: ${({ theme }) => theme['base-text']};
   }

   body {
      background: ${({ theme }) => theme.background};
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

   button {
      border: 0;
      background-color: transparent;
      cursor: pointer;
   }

   input {
      border: 0;
      outline: 0;
   }
`
