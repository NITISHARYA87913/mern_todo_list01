import axios from 'axios';
const url = "http://localhost:5000/todos";


export const readTodo =  ()=>axios.get(url);
export const createTodo = (newTodo) => axios.post(url , newTodo);
export const deleteTodo = (id)=>axios.delete(`http://localhost:5000/todos/deleteTodo/${id}` );