import React from 'react'

import HeaderContainer from '../container/HeaderContainer'
import Loading from '../presentational/Loading'
import ThemeProvider from '../../config/ThemeProvider'
import MainContainer from '../container/MainContainer'
import ProductsContainer from './ProductsContainer'

const App = () => (
  <ThemeProvider>
    <>
      <HeaderContainer />
      <Loading />
      <MainContainer>
        <ProductsContainer />
      </MainContainer>
    </>
  </ThemeProvider>
)

export default App
