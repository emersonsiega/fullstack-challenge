const ProductsService = {
  products: () => {
    //TODO: Call backend api
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({})
      }, 1500)
    })
  },
}

export default ProductsService
