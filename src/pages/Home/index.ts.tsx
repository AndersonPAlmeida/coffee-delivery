import { BannerContainer, Info, Titles } from './styles'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

export function Home() {
  return (
    <BannerContainer>
      <div>
        <Titles>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </Titles>

        <Info>
          <div className="tag one">
            <ShoppingCart size={32} weight="fill" />
            <span>Compra simples e segura</span>
          </div>
          <div className="tag two">
            <Timer size={32} weight="fill" />
            <span>Entrega rápida e rastreada</span>
          </div>
          <div className="tag three">
            <Package size={32} weight="fill" />
            <span>Embalagem mantém o café intacto</span>
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
  )
}
