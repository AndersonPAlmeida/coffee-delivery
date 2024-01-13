import styled from 'styled-components'
import { stylesStandard } from '../../styles/stylesStandard'

export const CheckoutContainer = styled.div`
  ${stylesStandard.widthScreen.screenXG}
  display: grid;
  grid-template-columns: 1fr 44.8rem;
  gap: 1.5rem 3.2rem;
`

export const AddressAndTypePayment = styled.div`
  width: 100%;
  height: 40px;
  background-color: goldenrod;
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
