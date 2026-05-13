import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';

import ProductController from "./src/controllers/product.controller.js";

import { validateRequest } from './src/controllers/middlewares/validation.middleware.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.set(
  'views',
  path.join(path.resolve(), 'src', 'views')
);

app.use(ejsLayouts);

const productController = new ProductController();

const port = process.env.PORT || 5000;

app.get(
  '/',
  productController.getProduct.bind(productController)
);

app.get(
  '/new',
  productController.getAddForm.bind(productController)
);

app.post(
  '/add-product',
  validateRequest,
  productController.addnewProduct.bind(productController)
);

app.get(
  '/update-product/:id',
  productController.getUpdateProductVeiw.bind(productController)
);

app.post(
  '/update-product/:id',
  validateRequest, productController.updateProduct.bind(productController)
);

app.post(
  '/delete-product/:id',
  productController.deleteProduct.bind(productController)
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
