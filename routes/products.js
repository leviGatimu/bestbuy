import { upload } from "../config/multer.js"; 
import {
    getAllProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.mjs';
import express from 'express';

const router = express.Router()

router.get('/', getAllProducts);
router.get('/:id', getProductByID);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;