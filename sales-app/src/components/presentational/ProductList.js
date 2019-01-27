import React from 'react'
import { Col } from 'reactstrap'
import styled from 'styled-components'

import CartProduct from './CardProduct'
import EmptyList from './EmptyList'

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ProductList = ({ products = [], onAddItem, onRemoveItem }) => {
  if (products.length === 0) {
    return <EmptyList text="Nenhum produto encontrado!" icon="faWineBottle" />
  }

  return (
    <ProductsContainer>
      {products.map(product => {
        return (
          <Col key={product.id} xs="12" md="6" lg="4">
            <CartProduct
              product={product}
              showAdd={!product.isOnCart}
              showRemove={product.isOnCart}
              onAddItem={onAddItem}
              onRemoveItem={onRemoveItem}
            />
          </Col>
        )
      })}
    </ProductsContainer>
  )
}

export default ProductList
