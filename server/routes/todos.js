import express from 'express';
import { createTodos, deleteTodo, readTodos } from '../controller/todos.js';

const router = express.Router();

router.get("/" , readTodos);
router.post("/" , createTodos);
router.delete("/deleteTodo/:id" , deleteTodo);
export default router;