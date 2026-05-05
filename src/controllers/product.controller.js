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
  
  // Save if valid
  ProductModel.add(req.body);
  const products = ProductModel.get();

  res.render("products", { products });
}
} 