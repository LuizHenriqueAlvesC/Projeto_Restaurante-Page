import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 320px;
  padding: 8px;
  margin-bottom: 32px;
  background-color: ${cores.vermelha};
  color: ${cores.bege2};
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
`

export const Descricao = styled.p`
  padding: 8px 0;
  font-size: 14px;
`

export const Button = styled.button`
  width: 100%;
  background-color: ${cores.bege};
  color: ${cores.vermelha};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  border: none;
  cursor: pointer;
`
