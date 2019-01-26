import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import HeaderContainer from '../container/HeaderContainer'
import Loading from '../presentational/Loading'
import ThemeProvider from '../../config/ThemeProvider'
import MainContainer from '../container/MainContainer'

const ProductsContainer = lazy(() => import('./ProductsContainer'))
const CartContainer = lazy(() => import('./CartContainer'))

const App = () => (
  <ThemeProvider>
    <>
      <HeaderContainer />
      <Loading />
      <MainContainer>
        <Switch>
          <Route path="/" exact component={() => <ProductsContainer />} />
          <Route path="/cart" exact component={() => <CartContainer />} />
        </Switch>
      </MainContainer>
    </>
  </ThemeProvider>
)

export default App
