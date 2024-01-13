import styled from 'styled-components'
import { stylesStandard } from '../../styles/stylesStandard'

export const CheckoutContainer = styled.div`
  ${stylesStandard.widthScreen.screenXG}
  display: grid;
  grid-template-columns: 1fr 44.8rem;
  gap: 1.5rem 3.2rem;
`

export const AddressAndTypePayment = styled.div`
  padding: 4rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-card']};
`

export const ItemsAndPayments = styled.div`
  padding: 4rem;
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: ${({ theme }) => theme['base-card']};
`

export const Title = styled.h2`
  ${stylesStandard.fonts.titleXS}
  color: ${({ theme }) => theme['base-subtitle']};
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

export const ButtonConfirm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  transition: all 0.3s;
  text-transform: uppercase;

  background-color: ${({ theme }) => theme.yellow};
  padding: 12px 8px;
  width: 100%;

  ${stylesStandard.fonts.buttonG}
  color: ${({ theme }) => theme.white};
  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
