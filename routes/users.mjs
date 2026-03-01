import {
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/usercontroller.mjs';

import express from 'express';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/', getUserByID);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

export default router;