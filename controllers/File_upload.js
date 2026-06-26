const Product = require("../../models/products")

const createProduct = async(req, res) => {
  const products = await products.find({})
  res.status(StatusCodes.OK).json({count: products.length, products})
}
