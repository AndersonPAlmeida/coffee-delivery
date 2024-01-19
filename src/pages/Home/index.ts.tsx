import {
  Banner,
  BannerContainer,
  HomeContainer,
  Info,
  Products,
  Subtitle,
  Titles,
} from './styles'
import {
  ShoppingCartSimple,
  Package,
  Timer,
  Coffee,
} from '@phosphor-icons/react'
import { Product } from './Components/Product'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Home() {
  const { cafes } = useContext(CartContext)
  return (
    <HomeContainer>
      <BannerContainer>
        <Banner>
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
                <ShoppingCartSimple size={32} weight="fill" />
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
        </Banner>
      </BannerContainer>

      <Subtitle>Nossos cafés</Subtitle>

      <Products>
        {cafes.map((coffee) => {
          return <Product key={coffee.id} coffee={coffee} />
        })}
      </Products>
    </HomeContainer>
  )
}
