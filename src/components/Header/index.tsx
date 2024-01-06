import logoCoffee from '../../assets/Logo.svg'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { CountShop, HeaderContainer } from './style'
import { NavLink } from 'react-router-dom'

export function Header() {
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
          <CountShop>5</CountShop>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
