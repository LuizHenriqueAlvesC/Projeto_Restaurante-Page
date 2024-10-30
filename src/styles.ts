import { createGlobalStyle } from 'styled-components'

const cores = {
  bege: '#FFF8F2',
  vermelha: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.bege};
    color: ${cores.vermelha};
  }

  .container {
    max-width: 1024px;
    witdh: 100%;
    margin: 0 auto;
  }
`
