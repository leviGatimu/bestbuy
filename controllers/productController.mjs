import Product from '../models/products.js';

//1. Get all products
//2. Get all products by ID
//3. Create a product
//4. Update a product by ID
//5. Delete a product by ID

//1. Get all products
export const getAllProducts = async (req, res) => {
    try{
        const product = await Product.find();
        res.status(200).json(product);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

//2. Get all products by ID
export const getProductByID = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({message : "Product was not found"});
        res.status(200).json(product);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

//3. Create a product
export const createProduct = async (req, res) => {
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
        console.log(product);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}
//4. Update a product by ID
export const updateProductByID = async (req, res) => {
    try{
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true , runValidators: true});
            if(!product) return res.status(404).json({message: "The product was not found."});
            res.status(200).json(product);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

//5. Delete a product by ID
export const deleteProduct = async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product) return res.status(404).json({message: "The product wqas not found."});
        res.status(200).json({message : "The product selected was deleted."});
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}
