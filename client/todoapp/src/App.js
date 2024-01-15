import { useEffect, useState } from "react";
import { createTodo } from "./api";
import "./App.css";
import Preloader from "./components/Preloader";
import { deleteTodos, readTodos } from "./functions";

function App() {
  const [todo, setTodo] = useState({ title: "", content: "" });
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    const Fetchdata = async () => {
      const result = await readTodos();
      setTodos(result);
    };
    Fetchdata();
  }, [todos]);
  const onSubmitHandel =  (e) => {
    e.preventDefault();
    createTodo(todo);
    
  };
  const removeTodo = async(id)=>{
await deleteTodos(id);
const todocopy = [...todos];
todocopy.filter(todo=>todo.id!==id);
setTodos(todocopy);
  }
  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={onSubmitHandel}>
          <div className="row">
            {/* <pre>{JSON.stringify(todo)}</pre> */}
            <div className="input-field col s6">
              <i className="material-icons prefix">title</i>
              <input
                id="title"
                type="text"
                className="validate"
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              />
              <label htmlFor="title">title</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons  prefix">description</i>
              <input
                id="description"
                type="tel"
                className="validate"
                onChange={(e) => setTodo({ ...todo, content: e.target.value })}
              />
              <label htmlFor="description">description</label>
            </div>
          </div>
          <div className="row right-aline">
            <button className="waves=effect waves-light btn">Submit Now</button>
          </div>
        </form>
        {!todos ? (
          <Preloader />
        ) : todos.length > 0 ? (
          <ul className="collection">
            {todos.map((todo) => (
              <li key={todo._id} className="collection-item">
                <div>
                  <h5>{todo.title}</h5>
                  <p>
                    {todo.content}
                   <a href="#!" className="secondary-content" onClick={()=>removeTodo(todo._id)}>
  <i className="material-icons">delete</i>
</a>

                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>NO todos</div>
        )}
      </div>
    </div>
  );
}

export default App;
