// import { useDispatch } from 'react-redux' // Importa o hook useDispatch do React-Redux para despachar ações
import close from '../../assets/close.svg'

import Button from '../Button' // Importa o componente Button

// import { open, add } from '../../store/reducers/modal' // Importa as ações open e add do reducer do modal

import {
  ProductsCard,
  Title,
  Description,
  Content,
  ModalContent,
  Modal
} from './styles' // Importa os estilos específicos do componente
import { ProductItem } from '../../pages/Home'
import { useState } from 'react'

// Função para obter uma descrição truncada
const getDescription = (description: string) => {
  // Se a descrição for maior que 175 caracteres, trunca e adiciona '...'
  if (description.length > 175) {
    return `${description.slice(0, 160)}...`
  }
  return description // Retorna a descrição completa se for menor ou igual a 175 caracteres
}
export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

// Componente Product que exibe as informações de um produto
const Product = ({ foto, preco, nome, descricao, porcao }: ProductItem) => {
  // Cria um objeto com as informações do produto selecionado
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      {/* Card do produto */}
      <ProductsCard>
        {/* Imagem do produto */}
        <img src={foto} alt={nome} />
        {/* Título do produto */}
        <Title>{nome}</Title>
        {/* Descrição truncada do produto */}
        <Description>{getDescription(descricao)}</Description>
        {/* Botão para abrir o modal com mais detalhes */}
        <Button
          title="Clique aqui para saber mais detalhes sobre o produto"
          type="button"
          onClick={() => setModalIsOpen(true)}
        >
          Mais detalhes
        </Button>
      </ProductsCard>
      <Modal className={modalIsOpen ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <div>
              <img
                src={close}
                alt="ícone de fechar"
                onClick={() => setModalIsOpen(false)}
              />
            </div>
          </header>
          <Content>
            <img src={foto} alt="img" />
            <div>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
              <Button
                title={'Clique aqui para adicionar este produto ao carrinho'}
                type={'button'}
              >
                Adicionar ao carrrinho {formataPreco(preco)}
              </Button>
            </div>
          </Content>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Product
