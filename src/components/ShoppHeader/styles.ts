import styled from 'styled-components'
import { cores } from '../../styles'

export const ImagemFundo = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: 900;

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: ${cores.vermelha};
    text-decoration: none;
  }
`
export const Logo = styled.img``
