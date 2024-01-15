
import Todo from "../model/todos.js";
export const readTodos = async(req , res)=>{
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({error: error.messege});
    }
}
export const createTodos = async(req , res)=>{
    const todo = new Todo(req.body);
    console.log(req.body)
 
    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(409).json({error: error.messege});
    }
}
export const deleteTodo = async(req , res)=>{
    const id = req.params.id;
   console.log(id)
    let todo;
  try {
    todo = await Todo.findByIdAndRemove(id);
  
  } catch (err) {
    console.log(err);
  }
  if (!todo) {
    return res.status(500).json({ message: "Unable To Delete" });
  }
  return res.status(200).json({ message: "Successfully Delete" });
  }
