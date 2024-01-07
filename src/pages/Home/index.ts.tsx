import {
  BannerContainer,
  HomeContainer,
  Info,
  Operation,
  Product,
  Products,
  Titles,
} from './styles'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <div>
          <Titles>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </Titles>

          <Info>
            <div className="tag one">
              <ShoppingCart size={32} weight="fill" />
              <span>Compra simples e segura</span>
            </div>
            <div className="tag two">
              <Package size={32} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="tag three">
              <Timer size={32} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="tag four">
              <Coffee size={32} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </div>
          </Info>
        </div>
        <div className="containerBanner">
          <img src="./banner.svg" alt="" />
        </div>
      </BannerContainer>

      <h2>Nossos cafés</h2>

      <Products>
        <Product>
          <img src="./products/expresso.png" alt="" />
          <div className="tag">Tradicional</div>

          <div className="description">
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
          </div>
          <Operation>
            <div className="price">
              R$
              <span> 9,90</span>
            </div>
            <div className="addCart">
              <div className="qtd">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <ShoppingCart />
            </div>
          </Operation>
        </Product>
      </Products>
    </HomeContainer>
  )
}
