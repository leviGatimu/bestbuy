import mongoose from 'mongoose';

const productSchema = new mongoose.Schema ({
    name : {
        type : String,
        required : true, 
        trim : true
    },
    description : {
        type : String,
        default : ""
   },
   price : {
    type : Number , 
    required: true, 
    min : 0, 
   },
   catgeory : {
    type : String,
    required: true
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