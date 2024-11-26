export const getTotalPrice = (items: ProductItem[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco)
  }, 0)
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
