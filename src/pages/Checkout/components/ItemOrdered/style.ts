import styled from 'styled-components'
import { stylesStandard } from '../../../../styles/stylesStandard'

export const ItemOrderedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;
`

export const Item = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  ${stylesStandard.fonts.textM}

  span {
    font-weight: 700;
  }
`

export const Description = styled.div`
  color: ${({ theme }) => theme['base-subtitle']};

  display: flex;
  gap: 2rem;
  align-items: center;

  img {
    height: 64px;
  }
`

export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
`

export const Operations = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:last-child {
    text-align: end;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  transition: all 0.3s;
  text-transform: uppercase;
`

export const ButtonRemove = styled(Button)`
  background-color: ${({ theme }) => theme['base-button']};
  padding: 0 8px;
  gap: 4px;

  ${stylesStandard.fonts.buttonM}

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
    svg {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`

export const ButtonConfirm = styled(Button)`
  background-color: ${({ theme }) => theme.yellow};
  padding: 12px 8px;
  width: 100%;

  ${stylesStandard.fonts.buttonG}
  color: ${({ theme }) => theme.white};
  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
