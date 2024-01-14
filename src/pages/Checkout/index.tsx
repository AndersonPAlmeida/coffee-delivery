// import { useContext } from 'react'
// import { CartContext } from '../../contexts/CartContext'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { ItemOrdered } from './components/ItemOrdered'
import {
  Address,
  AddressAndTypePayment,
  ButtonConfirm,
  CheckoutContainer,
  DescriptionAddress,
  DescriptionPayment,
  FieldInputContainer,
  FieldRadioContainer,
  Information,
  ItemsAndPayments,
  Price,
  Subtitle,
  Title,
  TypePayment,
} from './style'
import { FieldInput } from '../../components/Forms/InputField'
import { RadioField } from '../../components/Forms/RadioField'

export function Checkout() {
  // const { cart } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <Title>Complete seu pedido</Title>
      <Title>Cafés selecionados</Title>

      <AddressAndTypePayment>
        <Address>
          <DescriptionAddress>
            <MapPinLine size={22} />
            <Subtitle>
              <p>Endereço de Entrega</p>
              Informe o endereço onde deseja receber seu pedido
            </Subtitle>
          </DescriptionAddress>

          <FieldInputContainer>
            <FieldInput
              containerProps={{ style: { gridArea: 'cep' } }}
              type="number"
              placeholder="CEP"
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'street' } }}
              type="text"
              placeholder="Rua"
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'number' } }}
              type="text"
              placeholder="Número"
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'complement' } }}
              optional
              type="text"
              placeholder="Complemento"
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'district' } }}
              type="text"
              placeholder="Bairro"
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'city' } }}
              type="text"
              placeholder="Cidade"
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'uf' } }}
              type="text"
              placeholder="UF"
            />
          </FieldInputContainer>
        </Address>

        <TypePayment>
          <DescriptionPayment>
            <CurrencyDollar size={22} />
            <Subtitle>
              <p>Pagamento</p>O pagamento é feito na entrega. Escolha a forma
              que deseja pagar
            </Subtitle>
          </DescriptionPayment>

          <FieldRadioContainer>
            <RadioField type="radio" name="paymentMethod" value="credit">
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </RadioField>
            <RadioField type="radio" name="paymentMethod" value="debit">
              <Bank size={16} />
              <span>Cartão de Débito</span>
            </RadioField>
            <RadioField type="radio" name="paymentMethod" value="cash">
              <Money size={16} />
              <span>Dinheiro</span>
            </RadioField>
          </FieldRadioContainer>
        </TypePayment>
      </AddressAndTypePayment>

      <ItemsAndPayments>
        <ItemOrdered />

        <Price>
          <Information>
            <p>Total de itens</p>
            <p>Entrega</p>
            <h3>Total</h3>
          </Information>
          <Information>
            <p>R$ 29,70</p>
            <p>R$ 3,50</p>
            <h3>R$ 33,20</h3>
          </Information>
        </Price>

        <ButtonConfirm>Confirmar Pedido</ButtonConfirm>
      </ItemsAndPayments>
    </CheckoutContainer>
  )
}
