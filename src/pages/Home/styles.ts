import { stylesStandard } from '../../styles/stylesStandard'
import styled from 'styled-components'
import backgroudBanner from '../../../public/backgroundBanner.svg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const BannerContainer = styled.div`
  background: url(${backgroudBanner}) no-repeat center;
  background-size: cover;
`

export const Banner = styled.div`
  ${stylesStandard.widthScreen.screenXG}
  display: flex;
  gap: 5.6rem;
  align-items: center;
  justify-content: center;
  padding: 92px 0;
`

export const Titles = styled.div`
  margin-bottom: 66px;
  h1 {
    ${stylesStandard.fonts.titleXL}
    margin-bottom: 16px;
    color: ${({ theme }) => theme['base-title']};
  }
  span {
    ${stylesStandard.fonts.textL}
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  ${stylesStandard.fonts.textM}

  .tag {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      color: ${({ theme }) => theme.background};
      border-radius: 50%;
      padding: 8px;
    }
  }

  .one svg {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }

  .two svg {
    background-color: ${({ theme }) => theme['base-text']};
  }

  .three svg {
    background-color: ${({ theme }) => theme.yellow};
  }

  .four svg {
    background-color: ${({ theme }) => theme.purple};
  }
`

export const Subtitle = styled.div`
  ${stylesStandard.widthScreen.screenXG}
  ${stylesStandard.fonts.titleL}
  color: ${({ theme }) => theme['base-subtitle']};
`

export const Products = styled.div`
  ${stylesStandard.widthScreen.screenXG}
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  padding-bottom: 100px;
`
