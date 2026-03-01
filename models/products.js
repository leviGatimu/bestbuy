import mongoose from 'mongoose';

const productSchema = new mongoose.Schema ({
    name : {
        type : String,
        trim : true
    },
    description : {
        type : String,
        default : ""
   },
   price : {
    type : Number , 

    min : 0, 
   },
   catgeory : {
    type : String,

   },
   stock : {
    type : Number,
    default : 0
   },
    image : {
    type : String,
    default : ""
    }
});

const Product = mongoose.model("Products", productSchema);

export default Product;