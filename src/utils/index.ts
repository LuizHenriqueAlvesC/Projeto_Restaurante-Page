import { ProductItem } from '../pages/Home'

export const getTotalPrice = (items: ProductItem[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco)
  }, 0)
}
