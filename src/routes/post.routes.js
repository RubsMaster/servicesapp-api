import { Router } from "express";
import { getAllPosts, getPostByID } from "../controllers/post.controller.js";

const router = Router();

router.get('/getAllPosts', getAllPosts)
router.get('/getPostByID/:id', getPostByID)


export default router;