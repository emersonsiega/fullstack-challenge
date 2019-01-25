import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import GlobalStyle from './GlobalStyle'

export const theme = {
  header: '#D65050',
  background: '#FEFEFE',
  darkText: '#333',
  lightText: '#FEFEFE',
  cardBackground: '#DCDCDC',
  primary: '#D7A04E',
  shadow: '#888888',
  headerLoading: '#9a0707',
  success: '#2F6738',
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
