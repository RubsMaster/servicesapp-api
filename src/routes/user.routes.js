import { Router } from "express";

const router = Router();

router.get('/getAllUsers', (req, res) => {
  res.send('Hello Kevs!')
})
router.get('/getUserByID', (req, res) => {
  res.send('Hello Kevs!')
})
router.put('/updateUser/:id', (req, res) => {
  res.send('Hello Kevs!')
})

export default router;