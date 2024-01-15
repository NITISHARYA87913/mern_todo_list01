
import * as api from '../api'
export const readTodos = async (res,req)=>{
try {
    
    const {data} = await api.readTodo()
     return data;
     
} catch (error) {
    console.log(error)
}
}
export const createTodos = async (todo)=>{
try {
    
    const {data} = await api.createTodo()
    return data;
} catch (error) {
    console.log(error)
}
}
export const deleteTodos = async (id) => {
  try {
    await api.deleteTodo(id);

  } catch (error) {
    console.log(error)
  }
}
