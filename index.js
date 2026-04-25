import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import ProductController from "./src/controllers/product.controller.js"

const app = express();
// parse from data
app.use(express.urlencoded({extended:true}))
// set up viewEngine
app.set('view engine','ejs')
app.set('views',path.join(path.resolve(),'src','views'))
app.use(express.static("src/views"));
app.use(ejsLayouts)
// create an instance of productController
const productController = new ProductController();


const port = process.env.PORT || 5000;

// Home route
app.get('/', productController.getProduct.bind(productController))
app.get('/new',productController.getAddForm)
app.post('/',productController.addnewProduct)



// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});