import styled from 'styled-components'
import { stylesStandard } from '../../../styles/stylesStandard'

export const InputContainer = styled.div``

export const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme['yellow-dark']};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme['base-button']};
  }

  span {
    ${stylesStandard.fonts.buttonM}
    color: ${({ theme }) => theme['base-label']};
    font-style: italic;
    padding-right: 12px;
  }
`

export const InputField = styled.input`
  width: 100%;
  border-radius: 4px;
  background-color: transparent;
  padding: 12px;

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`
