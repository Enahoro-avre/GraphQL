const productModel = require('./products.model')

module.exports = {
  Query: {
    products: () => {
        return productModel.getAllProducts();
    },
    productsByPrice: (parent , args)=> {
      return productModel.getProductsByPrice(args.min , args.max)
    },
    product: (_ , args)=> {
      return productModel.getProductbyId(args.id) // id's are strings
    }
  },
};
