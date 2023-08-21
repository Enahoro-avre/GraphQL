const products = [
    {
      id: "red shoe",
      description: "red shoe description",
      price: 42.5,
    },
    {
      id: "blue shoe",
      description: "blue shoe description",
      price: 52.5,
    },
  ]

function getAllProducts() {
  return products
}

function getProductsByPrice(min , max) {
  return products.filter((product)=> {
    return product.price >= min && product.price <= max
  })
}

const getProductbyId = (id) => {
  return products.find((product)=> product.id === id)
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductbyId
}