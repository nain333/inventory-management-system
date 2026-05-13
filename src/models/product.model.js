// models/product.model.js

export default class ProductModel {

  constructor(_id, _name, _desc, _price, _imageUrl) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }

  // GET ALL PRODUCTS
  static get() {
    return products;
  }

  // ADD PRODUCT
  static add(productObj) {

    const newProduct = new ProductModel(
      products.length + 1,
      productObj.name,
      productObj.desc,
      productObj.price,
      productObj.imageUrl
    );

    products.push(newProduct);
  }

  // GET PRODUCT BY ID
  static getById(id) {

    return products.find((p) => p.id == id);

  }

  // UPDATE PRODUCT
  static update(id, updatedProductData) {

    const productIndex = products.findIndex(
      (p) => p.id == id
    );

    if (productIndex !== -1) {

      products[productIndex].name = updatedProductData.name;
      products[productIndex].desc = updatedProductData.desc;
      products[productIndex].price = updatedProductData.price;
      products[productIndex].imageUrl = updatedProductData.imageUrl;

      return true;
    }

    return false;
  }

  // DELETE PRODUCT
  static delete(id) {

    const productIndex = products.findIndex(
      (p) => p.id == id
    );

    if (productIndex !== -1) {

      products.splice(productIndex, 1);

      return true;
    }

    return false;
  }

}

// DUMMY DATA
var products = [

  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    19.99,
    "https://via.placeholder.com/150"
  ),

  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    29.99,
    "https://via.placeholder.com/150"
  ),

  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    39.99,
    "https://via.placeholder.com/150"
  ),

  new ProductModel(
    4,
    "Product 4",
    "Description for Product 4",
    49.99,
    "https://via.placeholder.com/150"
  ),

  new ProductModel(
    5,
    "Product 5",
    "Description for Product 5",
    59.99,
    "https://via.placeholder.com/150"
  ),

  new ProductModel(
    6,
    "Product 6",
    "Description for Product 6",
    69.99,
    "https://via.placeholder.com/150"
  ),

  new ProductModel(
    7,
    "Product 7",
    "Description for Product 7",
    79.99,
    "https://via.placeholder.com/150"
  ),

  new ProductModel(
    8,
    "Product 8",
    "Description for Product 8",
    89.99,
    "https://via.placeholder.com/150"
  ),

  new ProductModel(
    9,
    "Product 9",
    "Description for Product 9",
    99.99,
    "https://via.placeholder.com/150"
  ),

  new ProductModel(
    10,
    "Product 10",
    "Description for Product 10",
    109.99,
    "https://via.placeholder.com/150"
  )

];