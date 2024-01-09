import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 6px;
  padding: 8px;
  background-color: ${({ theme }) => theme['base-button']};
`

export const ButtonOperator = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.purple};
    transition: color 0.5s;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`
