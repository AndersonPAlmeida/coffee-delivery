import styled from 'styled-components'
import { stylesStandard } from '../../styles/stylesStandard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 4rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-card']};
`

const Description = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }
`

export const Subtitle = styled.div`
  p {
    ${stylesStandard.fonts.textM}
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const CheckoutContainer = styled.form`
  ${stylesStandard.widthScreen.screenXG}
  display: grid;
  grid-template-columns: 1fr 44.8rem;
  gap: 1.5rem 3.2rem;
`

export const AddressAndTypePayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const Address = styled(Container)``

export const DescriptionAddress = styled(Description)`
  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }
`

export const FieldInputContainer = styled.div`
  display: grid;
  // eslint-disable-next-line prettier/prettier
  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'district city uf';
  grid-template-columns: 20rem 1fr 6rem;
  gap: 16px 12px;
`

export const TypePayment = styled(Container)``

export const DescriptionPayment = styled(Description)`
  svg {
    color: ${({ theme }) => theme.purple};
  }
`

export const FieldRadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ItemsAndPayments = styled.div`
  height: min-content;
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

export const ErrorMessage = styled.span`
  ${stylesStandard.fonts.tag}
  color: ${({ theme }) => theme.red};
  margin-top: -1.6rem;
`
