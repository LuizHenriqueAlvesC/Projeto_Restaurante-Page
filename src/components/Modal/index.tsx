import { useDispatch, useSelector } from 'react-redux'
import closeImg from '../../assets/close.svg'
import Button from '../Button'

import { add, open } from '../../store/reducers/cart'

import { close } from '../../store/reducers/modal'

import { Modal as StyledModal, Content, ModalContent } from './styles'
import { RootReducer } from '../../store'
import { formataPreco } from '../../utils'

interface Item {
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

interface ModalProps {
  item: Item
  addToCart: () => void
  closeModal: () => void
}

/* eslint-disable react/prop-types */
const ModalContentComponent: React.FC<ModalProps> = ({
  item,
  addToCart,
  closeModal
}) => (
  <>
    <header>
      {/* Ícone de fechar o modal */}
      <button type="button" onClick={closeModal} aria-label="Fechar modal">
        <img src={closeImg} alt="Ícone de fechar" />
      </button>
    </header>
    <Content>
      {/* Imagem do item */}
      <img src={item.foto} alt={item.nome} />
      <div>
        {/* Nome do item */}
        <h4>{item.nome}</h4>
        {/* Descrição do item */}
        <p>{item.descricao}</p>
        {/* Porção do item */}
        <p>{`Serve: ${item.porcao}`} </p>
        {/* Botão para adicionar o item ao carrinho */}
        <Button
          title="Clique aqui para adicionar este produto ao carrinho"
          type="button"
          onClick={addToCart}
        >{`Adicionar ao carrinho - ${formataPreco(item.preco)}`}</Button>
      </div>
    </Content>
  </>
)

// Componente Modal
const Modal: React.FC = () => {
  // Obtém o estado do modal do Redux
  const { isOpen, item } = useSelector((state: RootReducer) => state.modal)

  // Hook para despachar ações do Redux
  const dispatch = useDispatch()

  // Função para fechar o modal
  const closeModal = () => {
    dispatch(close())
  }

  // Função para adicionar o item ao carrinho
  const addToCart = () => {
    closeModal() // Fecha o modal
    dispatch(add(item)) // Adiciona o item ao carrinho
    dispatch(open()) // Abre o carrinho
  }

  return (
    // Container principal do modal
    <StyledModal className={isOpen ? 'visible' : ''}>
      {/* Conteúdo do modal */}
      <ModalContent className="container">
        <ModalContentComponent
          item={item}
          addToCart={addToCart}
          closeModal={closeModal}
        />
      </ModalContent>
      {/* Overlay para fechar o modal ao clicar fora */}
      <button
        className="overlay"
        onClick={closeModal}
        aria-label="Fechar modal"
      ></button>
    </StyledModal>
  )
}
export default Modal
