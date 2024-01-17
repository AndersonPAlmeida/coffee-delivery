import logoCoffee from '../../assets/Logo.svg'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import { CountShop, HeaderContainer } from './style'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)
  const isCartGreatherThanZero = cart.length
  const isCartEmpty = cart.length !== 0

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

        {isCartEmpty ? (
          <NavLink to="/checkout">
            <ShoppingCartSimple size={22} weight="fill" />
            {isCartGreatherThanZero > 0 && (
              <CountShop>{isCartGreatherThanZero}</CountShop>
            )}
          </NavLink>
        ) : (
          <div>
            <ShoppingCartSimple size={22} weight="fill" />
          </div>
        )}
      </nav>
    </HeaderContainer>
  )
}
