import { createGlobalStyle } from 'styled-components'

export const cores = {
  bege: '#FFF8F2',
  bege2: '#FFEBD9',
  vermelha: '#E66767',
  white: '#FFEBD9',
  white2: '#fff'
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
