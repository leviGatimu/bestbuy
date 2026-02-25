import express from 'express';

const router = express.Router();
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "customer",
    cart: []
  },
  {
    id: 2,
    name: "Sarah Kim",
    email: "sarah@example.com",
    role: "customer",
    cart: []
  },
  {
    id: 3,
    name: "Michael Store",
    email: "admin@bestbuy.com",
    role: "admin",
    cart: []
  }
];

router.get('/', (req, res) => {
    res.send(users);
});

export default router;