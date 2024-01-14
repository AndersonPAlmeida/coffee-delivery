// import { useContext } from 'react'
// import { CartContext } from '../../contexts/CartContext'
import { MapPinLine } from '@phosphor-icons/react'
import { ItemOrdered } from './components/ItemOrdered'
import {
  Address,
  AddressAndTypePayment,
  ButtonConfirm,
  CheckoutContainer,
  DescriptionAdrress,
  FormContainer,
  Information,
  ItemsAndPayments,
  Price,
  Subtitle,
  Title,
  TypePayment,
} from './style'
import { InputText } from '../../components/Forms/InputField'

export function Checkout() {
  // const { cart } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <Title>Complete seu pedido</Title>
      <Title>Cafés selecionados</Title>

      <AddressAndTypePayment>
        <Address>
          <DescriptionAdrress>
            <MapPinLine size={22} />
            <Subtitle>
              <p>Endereço de Entrega</p>
              Informe o endereço onde deseja receber seu pedido
            </Subtitle>
          </DescriptionAdrress>

          <FormContainer>
            <InputText
              containerProps={{ style: { gridArea: 'cep' } }}
              type="number"
              placeholder="CEP"
            />
            <InputText
              containerProps={{ style: { gridArea: 'street' } }}
              type="text"
              placeholder="Rua"
            />
            <InputText
              containerProps={{ style: { gridArea: 'number' } }}
              type="text"
              placeholder="Número"
            />
            <InputText
              containerProps={{ style: { gridArea: 'complement' } }}
              optional
              type="text"
              placeholder="Complemento"
            />
            <InputText
              containerProps={{ style: { gridArea: 'district' } }}
              type="text"
              placeholder="Bairro"
            />
            <InputText
              containerProps={{ style: { gridArea: 'city' } }}
              type="text"
              placeholder="Cidade"
            />
            <InputText
              containerProps={{ style: { gridArea: 'uf' } }}
              type="text"
              placeholder="UF"
            />
          </FormContainer>
        </Address>
        <TypePayment></TypePayment>
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
