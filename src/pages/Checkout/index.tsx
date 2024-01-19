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
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { ItemOrdered } from './components/ItemOrdered'
import { FieldInput } from '../../components/Forms/FieldInput'
import { RadioField } from '../../components/Forms/RadioField'
import {
  Address,
  AddressAndTypePayment,
  ButtonConfirm,
  CheckoutContainer,
  DescriptionAddress,
  DescriptionPayment,
  ErrorMessage,
  FieldInputContainer,
  FieldRadioContainer,
  Information,
  ItemsAndPayments,
  Price,
  Subtitle,
  Title,
  TypePayment,
} from './style'

const newFormPurchaseValidationSchema = zod.object({
  cep: zod.number({ invalid_type_error: 'Informe o cep' }),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  district: zod.string().min(1, 'Informe o bairro'),
  complement: zod.string(),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe a UF').max(2, 'A UF só recebe duas letras'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

type FormPurchase = zod.infer<typeof newFormPurchaseValidationSchema>

export function Checkout() {
  const { cart, cafes } = useContext(CartContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPurchase>({
    resolver: zodResolver(newFormPurchaseValidationSchema),
  })

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = cafes.find((coffee) => coffee.id === item.coffeeId)

    if (!coffeeInfo) {
      throw new Error('Café inexistente.')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const valueTotalPurchase = coffeesInCart.reduce((valuePurchase, cartItem) => {
    return cartItem.price * cartItem.quantity + valuePurchase
  }, 0)

  const freight = 3.5
  const valueTotalPurchaseAndFreight = valueTotalPurchase + freight

  function handleNewPurchase(data: FormPurchase) {
    const isCartEmpty = cart.length === 0
    if (isCartEmpty) {
      alert('Não há itens no arrrinho para realizar a compra.')
    }
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
              error={errors.cep}
              {...register('cep', { valueAsNumber: true })}
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'street' } }}
              type="text"
              placeholder="Rua"
              id="street"
              error={errors.street}
              {...register('street')}
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'number' } }}
              type="text"
              placeholder="Número"
              id="number"
              error={errors.number}
              {...register('number')}
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'complement' } }}
              optional
              type="text"
              placeholder="Complemento"
              id="complement"
              error={errors.complement}
              {...register('complement')}
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'district' } }}
              type="text"
              placeholder="Bairro"
              id="district"
              error={errors.district}
              {...register('district')}
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'city' } }}
              type="text"
              placeholder="Cidade"
              id="city"
              error={errors.city}
              {...register('city')}
            />
            <FieldInput
              containerProps={{ style: { gridArea: 'uf' } }}
              type="text"
              placeholder="UF"
              id="uf"
              error={errors.uf}
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
            <RadioField
              type="radio"
              value="credit"
              id="credit"
              {...register('paymentMethod')}
            >
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </RadioField>
            <RadioField
              type="radio"
              value="debit"
              id="debit"
              {...register('paymentMethod')}
            >
              <Bank size={16} />
              <span>Cartão de Débito</span>
            </RadioField>
            <RadioField
              type="radio"
              value="cash"
              id="cash"
              {...register('paymentMethod')}
            >
              <Money size={16} />
              <span>Dinheiro</span>
            </RadioField>
          </FieldRadioContainer>
          {errors.paymentMethod && (
            <ErrorMessage>{errors.paymentMethod.message}</ErrorMessage>
          )}
        </TypePayment>
      </AddressAndTypePayment>

      <ItemsAndPayments>
        {coffeesInCart.map((itemCoffee) => (
          <ItemOrdered key={itemCoffee.id} cartItem={itemCoffee} />
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
