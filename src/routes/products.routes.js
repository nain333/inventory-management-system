import express from 'express';
import ProductController from '../controllers/product.controller.js';
import upload from "../controllers/middlewares/file-upload.middleware.js";
import { validateRequest } from '../controllers/middlewares/validation.middleware.js';
import { auth } from '../controllers/middlewares/auth.middleware.js';
const router = express.Router();
const productController = new ProductController();
router.get(
  '/',auth,
  productController.getProduct.bind(productController)
);
router.get(
  '/new',auth,
  productController.getAddForm.bind(productController)
);

router.post(
  '/add-product',auth,
  upload.single("imageUrl"),
  validateRequest,
  productController.addnewProduct.bind(productController)
);

router.get(
  '/update-product/:id',auth,
  productController.getUpdateProductVeiw.bind(productController)
);

router.post(
  '/update-product/:id',auth,
  validateRequest, productController.updateProduct.bind(productController)
);

router.post(
  '/delete-product/:id',auth,
  productController.deleteProduct.bind(productController)
);
export default router;