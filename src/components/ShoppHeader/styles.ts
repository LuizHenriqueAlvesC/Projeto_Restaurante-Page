import styled from 'styled-components'
import { colors } from '../../styles'
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
