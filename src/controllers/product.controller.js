// controllers/product.controller.js

import ProductModel from "../models/product.model.js";

export default class ProductController {
  // SHOW ALL PRODUCTS
  getProduct(req, res) {
    const products = ProductModel.get();

    res.render("products", {
      products: products,
    });
  }

  // SHOW ADD PRODUCT FORM
  getAddForm(req, res) {
    res.render("new-product", {
      errorMessages: [],
    });
  }

  // ADD NEW PRODUCT
  
addnewProduct(req, res, next) {

    const { name, desc, price, imageUrl } = req.body;

    let finalImagePath = "";

    // uploaded file exists
    if (req.file) {

        finalImagePath = req.file.filename;
    }
    // image URL exists
    else if (imageUrl) {

        finalImagePath = imageUrl;
    }

    ProductModel.add({
        name,
        desc,
        price,
        imageUrl: finalImagePath
    });

    const products = ProductModel.get();

    res.render("products", {
        products,
    });
}

  // SHOW UPDATE PRODUCT FORM
  getUpdateProductVeiw(req, res, next) {
    const { id } = req.params;

    const productFound = ProductModel.getById(id);

    if (productFound) {
      res.render("update-product", {
        product: productFound,
        errorMessages: null,
      });
    } else {
      res.status(404).send("Product not found");
    }
  }

  // UPDATE PRODUCT
  updateProduct(req, res, next) {
    const { id } = req.params;

    const updated = ProductModel.update(id, req.body);

    if (updated) {
      const products = ProductModel.get();

      res.render("products", {
        products,
      });
    } else {
      res.status(404).send("Product not found");
    }
  }

  // DELETE PRODUCT
  deleteProduct(req, res, next) {
    const { id } = req.params;

    const deleted = ProductModel.delete(id);

    if (deleted) {
      const products = ProductModel.get();

      res.render("products", {
        products,
      });
    } else {
      res.status(404).send("Product not found");
    }
  }
}
