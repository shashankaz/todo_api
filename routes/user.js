import express from "express";
import { register, login, logout, profile } from "../controllers/user.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/profile", profile);

export default router;
