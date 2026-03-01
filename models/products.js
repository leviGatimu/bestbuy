import mongoose from 'mongoose';

const productSchema = new mongoose.Schema ({
    name : {
        type : String,
        trim : true,
        default: ""
    },
    description : {
        type : String,
        default : ""
   },
   price : {
    type : Number , 
    default : 0,
    min : 0, 
   },
   catgeory : {
    type : String,
    default: ""

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