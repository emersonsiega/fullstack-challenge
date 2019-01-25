import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.darkText};
    margin: 0;
    padding: 0;
    line-height: 1.5;
    scroll-behavior: smooth;
    transition: background-color 0.8s ease;
  }
`

export default GlobalStyle
