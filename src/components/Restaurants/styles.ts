import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.img``

export const Card = styled.div`
  margin-bottom: 48px;
  border: 1px solid ${cores.vermelha};
  position: relative;
  background-color: ${cores.white2};

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardInfo = styled.div`
  padding: 8px;
`

export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  p {
    display: flex;
  }

  img {
    margin-left: 8px;
  }
`

export const Titulo = styled.h3``

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const ButtonInfo = styled.div`
  background-color: ${cores.vermelha};
  display: inline-block;
  padding: 4px 6px;
  color: ${cores.white2};

  a {
    color: inherit; /* Herdando a cor do pai */
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }
`
