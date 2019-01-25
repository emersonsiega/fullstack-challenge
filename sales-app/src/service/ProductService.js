import { createService } from './config'

class ProductsService {
  static _service = createService('products')

  static products() {
    const request = this._service.get()
    return request.then(response => response.data)
  }
}

export default ProductsService
