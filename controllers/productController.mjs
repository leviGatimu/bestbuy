import Products from '../models/products.js';

//1. Get all products
//2. Get all products by ID
//3. Create a product
//4. Update a product by ID
//5. Delete a product by ID

//1. Get all products
export const getAllProducts = async (req, res) => {
    try{
        const product = await Products.find();
        res.json(product)
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

//2. Get all products by ID
export const getUserByID = async(req, res) => {
    try{
        const product = await Products.findById(req.params.id);
        if(!product) return res.status(404).json({message : "User not found."});
        res.status(200).json(product);
    }catch(err){
        console.log(err);
        res.status(500).json({error : err.message});
    }
}

//3. Create a product
export const createProduct = async(req, res) => {
    try{
        const product = new Products(req.body);
        await product.save();
        res.status(201).json(product);
    }catch(err){
        console.log(err);
        res.status(500).json({error : err.message});
}
}

//4. Update a product by ID
export const updateProduct = async(req, res) => {
    try{
        const product = await Products.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true , runValidators: true});
            if(!product) return res.status(404).json({message : "Product not found"});
            res.status(200).json(product);
    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});       
}
}

//5. Delete a product by ID
export const deleteProduct = async (req, res) => {
    try{
        const product = Products.findByIdAndDelete(req.params.id);
        if(!product) return res.status(404).json({message : "Product not found."});
        res.status(200).json(deleteProduct);
    }
}






