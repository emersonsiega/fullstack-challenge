import React from 'react'

import Header from '../presentational/Header'
import ThemeProvider from '../../config/ThemeProvider'

import MainContent from '../presentational/MainContent'
import ProductsContainer from './ProductsContainer'

const App = () => (
  <ThemeProvider>
    <>
      <Header />
      <MainContent>
        <ProductsContainer />
      </MainContent>
    </>
  </ThemeProvider>
)

export default App
