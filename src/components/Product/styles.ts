import styled from 'styled-components' // Importa a biblioteca styled-components para criar componentes estilizados

import { breakpoints, colors } from '../../styles' // Importa os breakpoints e as cores definidas no arquivo de estilos
import { StandardButton } from '../Button/styles'

// Estilo para a descrição do produto
export const Description = styled.p`
  margin: 8px 0; // Define a margem superior e inferior
  font-size: 14px; // Define o tamanho da fonte
  font-style: normal; // Define o estilo da fonte
  font-weight: 400; // Define o peso da fonte
  line-height: 22px; // Define a altura da linha
`

// Estilo para o card do produto
export const ProductsCard = styled.div`
  padding: 8px; // Define o espaçamento interno
  border-radius: 8px; // Define o arredondamento das bordas
  background-color: ${colors.darkPink}; // Define a cor de fundo do card
  color: ${colors.lightGray}; // Define a cor do texto
  position: relative;

  img {
    display: block; // Define o display da imagem como bloco
    width: 304px; // Define a largura da imagem
    height: 167px; // Define a altura da imagem
    margin: auto; // Centraliza a imagem horizontalmente
  }

  @media (max-width: ${breakpoints.desktop}) {
    text-align: center; // Centraliza o texto no card em telas menores

    ${Description} {
      text-align: justify; // Justifica o texto da descrição em telas menores
    }
  }
`

// Estilo para o título do produto
export const Title = styled.h3`
  margin-top: 8px; // Define a margem superior
  font-size: 16px; // Define o tamanho da fonte
  font-weight: 900; // Define o peso da fonte
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  background-color: ${colors.darkPink};
  max-width: 1024px;
  max-height: 344px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: end;
    margin: 8px;

    img {
      cursor: pointer;
    }
  }
`

export const Content = styled.div`
  display: flex;
  margin: 0 32px 32px 32px;

  img {
    margin-right: 24px;
    width: 280px;
    height: 280px;
  }

  h4 {
    color: ${colors.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  p {
    color: ${colors.white};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin: 16px 0;
  }
  ${StandardButton} {
    padding: 4px 8px;
    width: auto;
    text-align: justify;
  }
`
