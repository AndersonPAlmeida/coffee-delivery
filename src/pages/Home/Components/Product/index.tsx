import { ShoppingCartSimple } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/Forms/QuantityInput'
import { AddCart, Operation, ProductContainer, Tag } from './style'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { Cart } from '../../../../reducers/cart/reducer'

interface Props {
  coffee: {
    id: string
    name: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Product({ coffee }: Props) {
  const { addCoffeeCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const isQuantityEqualToOne = quantity === 1

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function haddleAddCart() {
    const order: Cart = {
      coffeeId: coffee.id,
      quantity,
    }

    addCoffeeCart(order)

    setQuantity(1)
  }

  return (
    <ProductContainer>
      <img src={coffee.image} alt="" />
      <div className="tags">
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="description">
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </div>
      <Operation>
        <div className="price">
          R$
          <span>{coffee.price.toFixed(2)}</span>
        </div>
        <AddCart>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            disabled={isQuantityEqualToOne}
          />
          <button className="shoppingCart" onClick={haddleAddCart}>
            <ShoppingCartSimple size={20} weight="fill" />
          </button>
        </AddCart>
      </Operation>
    </ProductContainer>
  )
}
