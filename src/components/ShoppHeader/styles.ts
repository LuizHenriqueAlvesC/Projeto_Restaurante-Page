import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import bannerImg from '../../assets/fundo.png'
import { LinkButton } from '../Button/styles'

export const ImagemFundo = styled.div`
  height: 186px;
  display: flex;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  padding: 64px 0;
  background-size: cover;
  font-size: 18px;
  font-weight: 900;
  color: ${colors.darkPink};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: ${colors.darkPink};
    cursor: pointer;
  }

  button {
    width: 256px;
    text-align: right;
    font-size: 18px;
    font-weight: 900;
    color: ${colors.darkPink};
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  h1 {
    line-height: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 0; // Espaçamento interno superior e inferior reduzido
    text-align: center; // Alinhamento centralizado do texto

    .container {
      display: flex; // Exibe os itens em linha
      flex-direction: column; // Direção da flexbox em coluna
      align-items: center; // Alinha os itens ao centro

      img {
        margin: 16px 0; // Espaçamento vertical para a imagem
      }

      button {
        text-align: center; // Alinhamento centralizado do texto no botão
      }
    }
`
export const RestaurantLink = styled(LinkButton)`
  padding: 0;
  font-size: 18px;
  font-weight: 900;
  background-color: transparent;
  color: ${colors.darkPink};
  width: 256px;
  bottom: 0;
  left: 0;
  position: relative;

  &:hover {
    background-color: ${colors.lightGray};
  }
`

export const Logo = styled.h1`
  line-height: 0;
`

export const CartButton = styled.a`
  display: flex;
`
