import { textStyle } from './../../styles/textStyle'
import styled from 'styled-components'
import backgroudBanner from '../../../public/backgroundBanner.svg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  h2 {
    ${textStyle.fonts.titleL}
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const BannerContainer = styled.div`
  background: url(${backgroudBanner}) no-repeat center;
  background-size: cover;

  display: flex;
  gap: 5.6rem;
  align-items: center;
  justify-content: center;
  padding: 92px 0;
`

export const Titles = styled.div`
  margin-bottom: 66px;
  h1 {
    ${textStyle.fonts.titleXL}
    margin-bottom: 16px;
    color: ${({ theme }) => theme['base-title']};
  }
  span {
    ${textStyle.fonts.textL}
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  ${textStyle.fonts.textM}

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
export const Products = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  padding-bottom: 100px;
`

export const Product = styled.div`
  flex: 0 0 25.6rem;
  background-color: ${({ theme }) => theme['base-card']};
  padding: 0 20px 20px;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  img {
    margin-top: -20px;
  }

  .tags {
    display: flex;
    gap: 4px;
  }

  .description {
    text-align: center;
    margin-bottom: 21px;

    h3 {
      ${textStyle.fonts.titleS}
      color: ${({ theme }) => theme['base-subtitle']};
      margin-top: 4px;
      margin-bottom: 8px;
    }

    p {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
export const Tag = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme['yellow-dark']};
  background-color: ${({ theme }) => theme['yellow-light']};
  padding: 4px 8px;
  border-radius: 20px;
`

export const Operation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .price span {
    ${textStyle.fonts.titleM}
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`
export const AddCart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .qtd {
    padding: 8px;
    background-color: ${({ theme }) => theme['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 4px;
    svg {
      color: ${({ theme }) => theme.purple};
      transition: color 0.5s;

      &:hover {
        color: ${({ theme }) => theme['purple-dark']};
      }
    }
  }

  .shoppingCart {
    padding: 8px;
    background-color: ${({ theme }) => theme['purple-dark']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.5s;
    svg {
      color: ${({ theme }) => theme['base-card']};
    }

    &:hover {
      background-color: ${({ theme }) => theme.purple};
    }
  }
`
