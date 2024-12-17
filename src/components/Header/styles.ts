import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: 900;
  color: ${colors.darkPink};

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
    }
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  width: 540px;
  text-align: center;
  padding-top: 138px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    align-items: center;
    text-align: center;
    width: 100%;
  }
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 40px;
`
