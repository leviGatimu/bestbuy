import {
    register,
    login
} from '../controllers/authorizationcontroller.mjs';
import express from 'express';

const router = express();

router.post('/', register);
router.post('/', login);

export default router;