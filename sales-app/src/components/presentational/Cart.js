import React from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

import EmptyList from './EmptyList'
import CartActions from './CartActions'
import CartFinishContainer from './CartFinishContainer'
import CardProduct from './CardProduct'

const CartContainer = styled(Row)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const Cart = ({
  items,
  total,
  onRemoveItem,
  onAddItem,
  onDecreaseQuantity,
  onSaveOrder,
}) => {
  if (items.length === 0) {
    return <EmptyList text="Seu carrinho está vazio!" icon="faShoppingBasket" />
  }

  return (
    <CartContainer>
      <Col xs="12" md="12" lg="8">
        {items.map(item => (
          <CardProduct
            key={item.id}
            product={item}
            height={140}
            showDetails={false}
            showRemove={true}
            onRemoveItem={onRemoveItem}
            primarywidth={15}
            actionWidth={33}
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
      <Col xs="12" md="12" lg="4">
        <CartFinishContainer items={items} total={total} onSaveOrder={onSaveOrder} />
      </Col>
    </CartContainer>
  )
}

export default Cart
