import express from "express";
import {
  deleteTask,
  getMyTask,
  newTask,
  updateTask,
} from "../controllers/task.js";

const router = express.Router();

router.post("/new", newTask);

router.get("/my", getMyTask);

router.route("/:id").put(updateTask).delete(deleteTask);

export default router;
