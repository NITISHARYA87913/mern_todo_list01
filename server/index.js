import express from "express";
import mongoose from "mongoose";
import router from "./routes/todos.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/todos", router);

mongoose
  .connect("mongodb://0.0.0.0:27017/todoapp")
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
