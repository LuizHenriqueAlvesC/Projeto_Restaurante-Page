import styled from 'styled-components'
import { colors } from '../../styles'
import bannerImg from '../../assets/fundo.png'

export const ImagemFundo = styled.div`
  height: 186px;
  display: flex;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  padding: 64px 0; // Espaçamento interno superior e inferior
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
`
export const Logo = styled.h1`
  line-height: 0;
`

export const CartButton = styled.a`
  display: flex;
`
