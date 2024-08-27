import { useState } from "react";
import Button from "./component/button";

function UseState() {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoName.trim()) {
      setTodos([...todos, todoName]);
      setTodoName("");
    }
  };

  return (
    <div className="container">
      <h1 className="text-[40px] my-3">Todo List</h1>
      <div className="flex">
        <input
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          placeholder="Add Your Todo"
          className="border p-2 border-purple-600"
        />
        <Button text={"Add"} onClick={addTodo} />
        <Button text={"Clear"} onClick={() => setTodos([])} />
      </div>

      {todos.map((data, index) => (
        <h1 key={index} className="todo-item">
          {data}
        </h1>
      ))}
    </div>
  );
}

export default UseState;
