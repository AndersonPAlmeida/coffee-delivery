import logoCoffee from '../../assets/Logo.svg'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { CountShop, HeaderContainer } from './style'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { order } = useContext(CartContext)
  const cartLength = order.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} alt="" />
      </NavLink>

      <nav>
        <button>
          <MapPin size={22} weight="fill" />
          Jequié, BA
        </button>
        <NavLink to="/checkout">
          <ShoppingCartSimple size={22} weight="fill" />
          {cartLength > 0 && <CountShop>{cartLength}</CountShop>}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
