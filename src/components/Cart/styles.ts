import styled from 'styled-components'
import { colors } from '../../styles'

import lixeira from '../../assets/lixeira-de-reciclagem.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${colors.darkPink};
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding: 32px 8px 0 8px;

  .empty-text {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    color: ${colors.lightGray};
    margin-bottom: 16px;
  }
`

export const ValueAll = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;
  font-size: 14px;
  color: ${colors.lightGray};
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  background-color: ${colors.lightGray};
  color: ${colors.darkPink};
  padding: 8px 8px 12px 8px;
  line-height: 22px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    margin-bottom: 8px;
    margin-right: 8px;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }
`
