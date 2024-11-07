import Button from '../Button'

import { ProductsCard, Title, Description } from './styles'
import { ProductItem } from '../../pages/Home'

const getDescription = (description: string) => {
  if (description.length > 175) {
    return `${description.slice(0, 160)}...`
  }
  return description
}

const Product = ({ foto, nome, descricao }: ProductItem) => {
  return (
    <>
      <ProductsCard>
        <img src={foto} alt={nome} />
        <Title>{nome}</Title>
        <Description>{getDescription(descricao)}</Description>
        <Button
          title="Clique aqui para saber mais detalhes sobre o produto"
          type="button"
        >
          Mais detalhes
        </Button>
      </ProductsCard>
    </>
  )
}

export default Product
