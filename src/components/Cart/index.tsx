import { CartContainer, CartItem, Overlay, SideBar, ValueAll } from './styles'

import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'
import { getTotalPrice } from '../../utils'
import { openDelivery } from '../../store/reducers/checkout'

const Cart = () => {
  // Obtém o estado do carrinho do Redux
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  // Hook para despachar ações do Redux
  const dispatch = useDispatch()

  // Função para fechar o carrinho
  const closeCart = () => {
    dispatch(close())
  }

  // Função para remover um item do carrinho
  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  // Função para abrir a seção de entrega
  const open = () => {
    closeCart()
    dispatch(openDelivery())
  }

  // Função para redirecionar para a entrega ou fechar o carrinho se estiver vazio
  const redirect = () => {
    if (items.length === 0) {
      return closeCart()
    }
    return open()
  }

  return (
    // Container principal do carrinho
    <CartContainer className={isOpen ? 'is-open' : ''}>
      {/* Overlay para fechar o carrinho ao clicar fora */}
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length > 0 ? (
          <>
            {/* Lista de itens no carrinho */}
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    type="button"
                  />
                </CartItem>
              ))}
            </ul>
            {/* Exibição do preço total */}
            <ValueAll>
              <p>Valor total</p>
              <span>{formataPreco(getTotalPrice(items))}</span>
            </ValueAll>
            {/* Botão para continuar com a entrega */}
            <Button
              title="Clique aqui para continuar com a entrega"
              type="button"
              onClick={() => redirect()}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <>
            {/* Mensagem quando o carrinho está vazio */}
            <p className="empty-text">
              O carrinho está vazio, adicione um produto para continuar com a
              compra.
            </p>
            {/* Botão para retornar ao menu do restaurante */}
            <Button
              title="Clique aqui para retornar ao menu do restaurante"
              type="button"
              onClick={() => closeCart()}
            >
              Retornar
            </Button>
          </>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
