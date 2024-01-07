import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
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
          <div className="qtd">
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <button className="shoppingCart">
            <ShoppingCartSimple size={16} weight="fill" />
          </button>
        </AddCart>
      </Operation>
    </ProductContainer>
  )
}
