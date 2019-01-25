import React from 'react'

import Header from '../presentational/Header'
import Loading from '../presentational/Loading'
import ThemeProvider from '../../config/ThemeProvider'
import MainContent from '../presentational/MainContent'
import ProductsContainer from './ProductsContainer'

const App = () => (
  <ThemeProvider>
    <>
      <Header />
      <Loading />
      <MainContent>
        <ProductsContainer />
      </MainContent>
    </>
  </ThemeProvider>
)

export default App
