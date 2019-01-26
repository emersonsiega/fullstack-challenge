import React from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

import CartEmpty from './CartEmpty'
import CartActions from './CartActions'
import CartFinishContainer from './CartFinishContainer'
import CardProduct from './CardProduct'

const CartContainer = styled(Row)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const Cart = ({ items, total, onRemoveItem, onAddItem, onDecreaseQuantity }) => {
  if (items.length === 0) {
    return <CartEmpty />
  }

  return (
    <CartContainer>
      <Col xs="12" md="8" lg="8">
        {items.map(item => (
          <CardProduct
            key={item.id}
            product={item}
            height={140}
            showDetails={false}
            showRemove={true}
            onRemoveItem={onRemoveItem}
            primarywidth={20}
            actionContent={
              <CartActions
                item={item}
                onAddItem={onAddItem}
                onDecreaseQuantity={onDecreaseQuantity}
              />
            }
          />
        ))}
      </Col>
      <Col xs="12" md="4" lg="4">
        <CartFinishContainer items={items} total={total} />
      </Col>
    </CartContainer>
  )
}

export default Cart
