import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as zod from 'zod'
import { ItemOrdered } from './components/ItemOrdered'
import { FieldInput } from '../../components/Forms/InputField'
import { RadioField } from '../../components/Forms/RadioField'
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

export function Checkout() {
  const { cart } = useContext(CartContext)
  const { register, handleSubmit } = useForm()
  const valueTotalPurchase = cart.reduce((valuePurchase, cartItem) => {
    return cartItem.price * cartItem.quantity + valuePurchase
  }, 0)
  const freight = 3.5
  const valueTotalPurchaseAndFreight = valueTotalPurchase + freight

  function handleNewPurchase(data: any) {
    console.log(data)
  }
  return (
    <CheckoutContainer onSubmit={handleSubmit(handleNewPurchase)}>
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
              id="cep"
              {...register('cep', { valueAsNumber: true })}
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'street' } }}
              type="text"
              placeholder="Rua"
              id="street"
              {...register('street')}
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'number' } }}
              type="text"
              placeholder="Número"
              id="number"
              {...register('number')}
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'complement' } }}
              optional
              type="text"
              placeholder="Complemento"
              id="complement"
              {...register('complement')}
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'district' } }}
              type="text"
              placeholder="Bairro"
              id="district"
              {...register('district')}
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'city' } }}
              type="text"
              placeholder="Cidade"
              id="city"
              {...register('city')}
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'uf' } }}
              type="text"
              placeholder="UF"
              id="uf"
              {...register('uf')}
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
        {cart.map((itemCoffee) => (
          <ItemOrdered key={itemCoffee.coffeeId} cartIten={itemCoffee} />
        ))}

        <Price>
          <Information>
            <p>Total de itens</p>
            <p>Entrega</p>
            <h3>Total</h3>
          </Information>
          <Information>
            <p>R$ {valueTotalPurchase.toFixed(2)}</p>
            <p>R$ {freight.toFixed(2)}</p>
            <h3>R$ {valueTotalPurchaseAndFreight.toFixed(2)}</h3>
          </Information>
        </Price>

        <ButtonConfirm type="submit">Confirmar Pedido</ButtonConfirm>
      </ItemsAndPayments>
    </CheckoutContainer>
  )
}
