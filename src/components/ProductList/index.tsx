import { ProductItem } from '../../pages/Home'
import Product from '../Product'

import { ProductsSection, List } from './styles'

export type Props = {
  products: ProductItem[]
}

const ProductsList = ({ products }: Props) => {
  console.log('Products:', products)
  return (
    <ProductsSection>
      <div className="container">
        <List>
          {products.length > 0 ? (
            products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                foto={product.foto}
                nome={product.nome}
                descricao={product.descricao}
                preco={product.preco}
                porcao={product.porcao}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </List>
      </div>
    </ProductsSection>
  )
}

export default ProductsList
