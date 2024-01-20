import styled from 'styled-components'
import { stylesStandard } from '../../styles/stylesStandard'

export const OrderContainer = styled.div`
  ${stylesStandard.widthScreen.screenXG}
  margin-top: 8rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Titles = styled.section`
  h1 {
    ${stylesStandard.fonts.titleL}
    color: ${({ theme }) => theme['yellow-dark']}
  }

  h3 {
    ${stylesStandard.fonts.textL}
    color: ${({ theme }) => theme['base-subtitle']}
  }
`

export const Informations = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OrderInfo = styled.section`
  width: 50vw;
  border: 1px solid;
  border-radius: 6px 36px;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};

  div {
    padding: 40px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 6px 36px;
  }
`

export const Illustration = styled.section``
