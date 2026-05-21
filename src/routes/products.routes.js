import express from 'express';
import ProductController from '../controllers/product.controller.js';
import upload from "../controllers/middlewares/file-upload.middleware.js";
import { validateRequest } from '../controllers/middlewares/validation.middleware.js';
const router = express.Router();
const productController = new ProductController();
router.get(
  '/',
  productController.getProduct.bind(productController)
);
router.get(
  '/new',
  productController.getAddForm.bind(productController)
);

router.post(
  '/add-product',
  upload.single("imageUrl"),
  validateRequest,
  productController.addnewProduct.bind(productController)
);

router.get(
  '/update-product/:id',
  productController.getUpdateProductVeiw.bind(productController)
);

router.post(
  '/update-product/:id',
  validateRequest, productController.updateProduct.bind(productController)
);

router.post(
  '/delete-product/:id',
  productController.deleteProduct.bind(productController)
);
export default router;