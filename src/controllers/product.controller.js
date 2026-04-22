import path from 'path'
import ProductModel from '../models/product.model.js'
export default class ProductController{
    
    getProduct(req,res){
        let products = ProductModel.get();
        console.log(products)
        console.log('inside controller')
        res.render('products',{products:products})


    }
} 