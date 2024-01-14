import styled from 'styled-components'
import { stylesStandard } from '../../../styles/stylesStandard'

export const InputRadioContainer = styled.label`
  input {
    display: none;
  }

  input:checked + div {
    border: 1px solid ${({ theme }) => theme.purple};
    background-color: ${({ theme }) => theme['purple-light']};
  }
`

export const TypePayment = styled.div`
  background-color: ${({ theme }) => theme['base-button']};
  ${stylesStandard.fonts.buttonM}
  transition: all 0.3s;

  padding: 16px;
  border-radius: 6px;
  border: 1px solid transparent;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }
`
