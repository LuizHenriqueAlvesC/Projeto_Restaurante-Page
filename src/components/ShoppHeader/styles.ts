import styled from 'styled-components'
import { colors } from '../../styles'

export const ImagemFundo = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: 900;
  color: ${colors.darkPink};

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: ${colors.darkPink};
  }
`
export const Logo = styled.img``
