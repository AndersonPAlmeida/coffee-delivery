import styled from 'styled-components'
import { stylesStandard } from '../../../styles/stylesStandard'

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 6px;
  padding: 8px;
  background-color: ${({ theme }) => theme['base-button']};

  span {
    ${stylesStandard.fonts.textM}
    color: ${({ theme }) => theme['base-title']};
  }
`

export const ButtonOperator = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.purple};
    transition: color 0.5s;
  }

  &:not(:disabled) {
    svg:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
