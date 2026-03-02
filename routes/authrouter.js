import {
    register,
    login
} from '../controllers/authorizationcontroller.mjs';
import express from 'express';

const router = express();

router.post('/register', register);
router.post('/login', login);

export default router;