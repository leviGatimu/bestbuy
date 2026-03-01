import {
    getAllusers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/usercontroller.mjs';

import express from 'express';

const router = express.Router();

router.get('/', getAllusers);
router.get('/:id', getUserByID);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;