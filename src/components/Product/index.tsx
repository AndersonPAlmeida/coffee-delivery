import { ShoppingCartSimple } from '@phosphor-icons/react'
import { QuantityInput } from '../QuantityInput'
import { AddCart, Operation, ProductContainer, Tag } from './style'

type Props = {
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
          <QuantityInput />
          <button className="shoppingCart">
            <ShoppingCartSimple size={16} weight="fill" />
          </button>
        </AddCart>
      </Operation>
    </ProductContainer>
  )
}
