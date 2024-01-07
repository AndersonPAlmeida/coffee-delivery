import styled from 'styled-components'
import { textStyle } from '../../styles/textStyle'

export const ProductContainer = styled.div`
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
  ${textStyle.fonts.tag}
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
    margin-left: 5px;
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
