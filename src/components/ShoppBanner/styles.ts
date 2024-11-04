import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .container {
    position: relative;
    padding-top: 200px;
    display: flex;
    align-items: flex-end;
    font-size: 32px;
    color: #ffffff;
  }

  p {
    position: absolute;
    top: 32px;
    color: rgba(255, 255, 255, 0.5);
  }
`
