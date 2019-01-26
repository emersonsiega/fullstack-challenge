import React from 'react'

import Icon from './Icon'

const CartEmpty = () => (
  <div className="text-center mt-10">
    <Icon name="faBoxOpen" size="3x" />
    <h5 className="font-weight-bold">Seu carrinho está vazio!</h5>
  </div>
)

export default CartEmpty
