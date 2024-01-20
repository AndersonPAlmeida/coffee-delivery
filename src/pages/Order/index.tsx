import {
  Illustration,
  Informations,
  OrderContainer,
  OrderInfo,
  Titles,
} from './style'

export function Order() {
  return (
    <OrderContainer>
      <Titles>
        <h1>Uhu! Pedido confirmado</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </Titles>

      <Informations>
        <OrderInfo>
          <div>Dados</div>
        </OrderInfo>
        <Illustration></Illustration>
      </Informations>
    </OrderContainer>
  )
}
