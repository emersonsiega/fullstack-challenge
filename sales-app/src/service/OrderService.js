import { createService } from './config'

class OrderService {
  static _service = createService('orders')

  static orders() {
    const request = this._service.get()
    return request.then(response => response.data)
  }

  static saveOrder(cart) {
    const order = {}
    debugger
    order.items = Object.values(cart.items).map(({ id, price, quantity }) => ({
      product_id: id,
      price,
      quantity,
    }))
    order.total = cart.total

    console.log(order)
    debugger

    const request = this._service.post('', order)
    return request.then(response => response.data)
  }
}

export default OrderService
