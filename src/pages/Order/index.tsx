import { CurrencyDollar, MapPin, ReceiptX, Timer } from '@phosphor-icons/react'
import {
  Illustration,
  InfoContainer,
  Informations,
  OrderContainer,
  OrderBackground,
  Titles,
  InformationOne,
  InformationTwo,
  InformationThree,
  OrderErro,
} from './style'
// eslint-disable-next-line import/no-absolute-path
import illustrationOrder from '/IllustrationOrder.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useParams } from 'react-router-dom'

export function Order() {
  const { orderComplete } = useContext(CartContext)
  const { orderId } = useParams()
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }
  const hasOrder = orderComplete.find((order) => order.id === orderId)

  if (!hasOrder) {
    return (
      <OrderContainer>
        <OrderErro>
          <h1>Sem pedidos com essa Ordem de compra</h1>
          <ReceiptX size={40} weight="fill" />
        </OrderErro>
      </OrderContainer>
    )
  }

  return (
    <OrderContainer>
      <Titles>
        <h1>Uhu! Pedido confirmado</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </Titles>

      <Informations>
        <OrderBackground>
          <InfoContainer>
            <InformationOne>
              <MapPin size={32} weight="fill" />
              <p>
                <span>
                  Entrega em{' '}
                  <strong>
                    Rua {hasOrder.street}, {hasOrder.number}
                  </strong>
                </span>
                <span>
                  {hasOrder.district} - {hasOrder.city}, {hasOrder.uf}
                </span>
              </p>
            </InformationOne>

            <InformationTwo>
              <Timer size={32} weight="fill" />
              <p>
                <span>Previsão de entrega </span>
                <strong>20 min - 30 min</strong>
              </p>
            </InformationTwo>

            <InformationThree>
              <CurrencyDollar size={32} weight="bold" />
              <p>
                <span>Pagamento na entrega </span>
                <strong>{paymentMethod[hasOrder.paymentMethod]}</strong>
              </p>
            </InformationThree>
          </InfoContainer>
        </OrderBackground>
        <Illustration>
          <img src={illustrationOrder} alt="" />
        </Illustration>
      </Informations>
    </OrderContainer>
  )
}
