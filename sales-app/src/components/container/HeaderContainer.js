import React from 'react'
import { connect } from 'react-redux'

import Header from '../presentational/Header'

const HeaderContainer = ({ items }) => <Header cartItems={items} />

const mapStateToProps = ({ cart = {} }) => ({
  items: Object.values(cart) || [],
})

export default connect(mapStateToProps)(HeaderContainer)
