import express from 'express';
import path from 'path';
import ProductController from "./src/controllers/product.controller.js"

const app = express();
app.use(express.static("src/views"));
// create an instance of productController
const productController = new ProductController();


const port = process.env.PORT || 3000;

// Home route
app.get('/', productController.getProduct)



// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});