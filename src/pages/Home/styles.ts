import { textStyle } from './../../styles/textStyle'
import styled from 'styled-components'
import backgroudBanner from '../../../public/backgroundBanner.svg'

export const BannerContainer = styled.div`
  background: url(${backgroudBanner}) no-repeat center;
  background-size: cover;

  display: flex;
  gap: 5.6rem;
  align-items: center;
  justify-content: center;
`

export const Titles = styled.div`
  margin-bottom: 66px;
  h1 {
    ${textStyle.fonts.titleXL}
    margin-bottom: 16px;
  }
  span {
    ${textStyle.fonts.textL}
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;

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
