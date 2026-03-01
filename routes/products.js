import {
    getAllProducts,
    getProductByID,
    createProduct,
    updateProductByID,
    deleteProduct
} from '../controllers/productController.mjs';

import express from 'express';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id',getProductByID);
router.post('/', createProduct);
router.put('/:id', updateProductByID);
router.delete('/:id', deleteProduct);

export default router;