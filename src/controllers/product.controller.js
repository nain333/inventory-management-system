import path from 'path'
import ProductModel from '../models/product.model.js'
export default class ProductController{
    
    getProduct(req,res){
        let products = ProductModel.get();
        console.log(products)
        console.log('inside controller')
        res.render('products',{products:products})


    }
    getAddForm(req,res){
        res.render('new-product',{errorMessages:[]})

    }
    addnewProduct(req, res, next) {
  const { name, price, imageUrl } = req.body;

  let errors = [];

  // Name validation
  if (!name || name.trim() === "") {
    errors.push("Name is required");
  }

  // Price validation
  if (!price || parseFloat(price) < 1) {
    errors.push("Price must be a positive value");
  }

  // URL validation
  try {
    new URL(imageUrl);
  } catch (err) {
    errors.push("Invalid image URL");
  }

  // If errors exist → send back to form
  if (errors.length > 0) {
    return res.render("new-product", {
      errorMessages: errors,
    });
  }

  // Save if valid
  ProductModel.add(req.body);
  const products = ProductModel.get();

  res.render("products", { products });
}
} 