import { totalPrice, addNewProduct } from './product'

describe('product functions', () => {
  const products = [
    { code: '1234', price: 100, count: 1 },
    { code: '4321', price: 200, count: 1 },
  ]

  it('should return total price when given products', () => {
    const price = totalPrice(products)

    expect(price).toBe(300)
  })

  it('should return 0 when given empty products', () => {
    const price = totalPrice([])

    expect(price).toBe(0)
  })

  it('should return 0 when not given any product', () => {
    const price = totalPrice()

    expect(price).toBe(0)
  })

  it('should add new product into products', () => {
    const productToAdd = { code: '4321', price: 200, count: 1 }
    const products = [{ code: '1234', price: 100, count: 1 }]

    const expectedProducts = addNewProduct(products, productToAdd)

    expect(expectedProducts).toEqual([
      { code: '1234', price: 100, count: 1 },
      { code: '4321', price: 200, count: 1 },
    ])
  })

  it('should increase product count when adding same product', () => {
    const productToAdd = { code: '1234', price: 100, count: 1 }
    const products = [{ code: '1234', price: 100, count: 1 }]

    const expectedProducts = addNewProduct(products, productToAdd)

    expect(expectedProducts).toEqual([
      { code: '1234', price: 100, count: 2 },
    ])
  })
})