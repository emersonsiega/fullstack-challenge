const CART_KEY = 'SALES_APP_CART'

class CartLocalService {
  static cart() {
    return new Promise(async resolve => {
      const storage = await localStorage.getItem(CART_KEY)

      const cart = JSON.parse(storage) || {}
      resolve(cart)
    })
  }

  static addItem(item) {
    return new Promise(async resolve => {
      const cart = await this.cart()

      const { id, price, quantity = 0 } = item
      const { total = 0 } = cart

      const newQuantity = quantity + 1

      const totalItem = this.total(price, newQuantity)

      const newItem = {
        ...item,
        quantity: newQuantity,
        total: totalItem,
      }

      const newCart = {
        ...cart,
        items: {
          ...cart.items,
          [id]: {
            ...newItem,
          },
        },
        total: this.round(total + price),
      }

      await localStorage.setItem(CART_KEY, JSON.stringify(newCart))
      resolve([newCart, newItem])
    })
  }

  static removeItem(id, remove) {
    return new Promise(async resolve => {
      const cart = await this.cart()

      const { price, quantity, total } = cart.items[id]

      let newQuantity = quantity - 1
      let newCart = {}
      if (newQuantity === 0 || remove) {
        newCart = await this.clearItem(id)
      } else {
        newCart = {
          ...cart,
          items: {
            ...cart.items,
            [id]: {
              ...cart.items[id],
              quantity: newQuantity,
              total: this.round(total - price),
            },
          },
          total: this.round(cart.total - price),
        }

        await localStorage.setItem(CART_KEY, JSON.stringify(newCart))
      }

      resolve(newCart)
    })
  }

  static clearItem(id) {
    return new Promise(async resolve => {
      const cart = await this.cart()

      const { price, quantity = 1 } = cart.items[id]

      delete cart.items[id]

      const newCart = {
        ...cart,
        total: this.round(cart.total - this.total(price, quantity)),
      }

      await localStorage.setItem(CART_KEY, JSON.stringify(newCart))
      resolve(newCart)
    })
  }

  static clear() {
    return new Promise(async resolve => {
      await localStorage.removeItem(CART_KEY)
      resolve()
    })
  }

  static total(price, quantity = 1) {
    return +(quantity * price).toFixed(2)
  }

  static round(value) {
    return +value.toFixed(2)
  }
}

export default CartLocalService
