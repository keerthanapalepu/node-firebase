import express from "express";
import { getAlluser } from "../controllers/userController.js";
import auth from '../middleware/auth.js';
const router = express.Router();

// http://localhost:3000/api/user
router.get("/user", auth, getAlluser);


export default {
    routes: router
};