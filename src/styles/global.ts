import { createGlobalStyle } from 'styled-components'

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
   }

   body, input-security, textarea, button{
      /* font-family: 'Baloo 2', sans-serif; */
      font-family: 'Roboto', sans-serif;  
      font-size: 1.4rem;
      line-height: 130%;
      font-weight: 400;
   }
`
