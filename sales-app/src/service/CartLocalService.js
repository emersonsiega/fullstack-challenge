const CART_KEY = 'SALES_APP_CART'

class CartLocalService {
  static items() {
    return new Promise(async resolve => {
      const storage = await localStorage.getItem(CART_KEY)

      const items = JSON.parse(storage) || {}
      resolve(items)
    })
  }

  static addItem(item) {
    return new Promise(async resolve => {
      const items = await this.items()

      const newItems = {
        ...items,
        [item.id]: {
          ...item,
        },
      }

      await localStorage.setItem(CART_KEY, JSON.stringify(newItems))
      resolve()
    })
  }

  static removeItem(id) {
    return new Promise(async resolve => {
      const items = await this.items()

      delete items[id]

      await localStorage.setItem(CART_KEY, JSON.stringify(items))
      resolve()
    })
  }

  static clear() {
    return new Promise(async resolve => {
      await localStorage.removeItem(CART_KEY)
      resolve()
    })
  }
}

export default CartLocalService
