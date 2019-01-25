import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import GlobalStyle from './GlobalStyle'

const theme = {
  header: '#D65050',
  background: '#FEFEFE',
  darkText: '#333',
  lightText: '#FEFEFE',
  cardBackground: '#DCDCDC',
  primary: '#D7A04E',
  shadow: '#888888',
}

const ThemeProvider = ({ children }) => (
  <Provider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </Provider>
)

export default ThemeProvider
