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

export const OrderBackground = styled.section`
  width: 45%;
  border: 1px solid;
  border-radius: 6px 36px;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};
`

export const InfoContainer = styled.section`
  padding: 40px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 6px 36px;
  ${stylesStandard.fonts.textM}

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  strong {
    font-weight: 700;
  }
`

export const InformationStyled = styled.span`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  svg {
    border-radius: 50%;
    padding: 8px;
    align-self: center;
    color: ${({ theme }) => theme.white};
  }

  p {
    display: flex;
    flex-direction: column;
  }
`
export const InformationOne = styled(InformationStyled)`
  svg {
    background-color: ${({ theme }) => theme.purple};
  }
`

export const InformationTwo = styled(InformationStyled)`
  svg {
    background-color: ${({ theme }) => theme.yellow};
  }
`

export const InformationThree = styled(InformationStyled)`
  svg {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`

export const Illustration = styled.section`
  width: 45%;

  img {
    width: 100%;
  }
`
