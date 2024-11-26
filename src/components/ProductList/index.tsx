import Loader from '../Loader'
import Product from '../Product'

import { ProductsSection, List } from './styles'

export type Props = {
  products?: ProductItem[]
  isLoading: boolean
}

const ProductsList = ({ products, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <ProductsSection>
      <div className="container">
        <List>
          {products?.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              foto={product.foto}
              nome={product.nome}
              descricao={product.descricao}
              preco={product.preco}
              porcao={product.porcao}
            />
          ))}
        </List>
      </div>
    </ProductsSection>
  )
}

export default ProductsList
