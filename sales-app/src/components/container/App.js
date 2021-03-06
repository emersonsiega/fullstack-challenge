import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import HeaderContainer from '../container/HeaderContainer'
import Loading from '../presentational/Loading'
import ThemeProvider from '../../config/ThemeProvider'
import MainContainer from '../container/MainContainer'
import Toast from '../presentational/Toast'

const ProductsContainer = lazy(() => import('./ProductsContainer'))
const CartContainer = lazy(() => import('./CartContainer'))
const OrdersContainer = lazy(() => import('./OrdersContainer'))

const App = () => (
  <ThemeProvider>
    <>
      <HeaderContainer />
      <Toast />
      <Loading />
      <MainContainer>
        <Switch>
          <Route path="/" exact component={() => <ProductsContainer />} />
          <Route path="/cart" exact component={() => <CartContainer />} />
          <Route path="/orders" exact component={() => <OrdersContainer />} />
        </Switch>
      </MainContainer>
    </>
  </ThemeProvider>
)

export default App
