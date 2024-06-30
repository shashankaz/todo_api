import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();
config();

app.use(express.json()); // to parse JSON bodies
app.use(cookieParser()); // to parse cookies
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // enable set cookie in the browser
  })
);

app.use("/api/auth", userRouter);
app.use("/api/tasks", taskRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Todo API",
  });
});
