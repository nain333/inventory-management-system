import express from 'express';
import path from 'path';
import ProductController from "./src/controllers/product.controller.js"

const app = express();
// set up viewEngine
app.set('view engine','ejs')
app.set('views',path.join(path.resolve(),'src','views'))
app.use(express.static("src/views"));
// create an instance of productController
const productController = new ProductController();


const port = process.env.PORT || 3000;

// Home route
app.get('/', productController.getProduct.bind(productController))



// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});