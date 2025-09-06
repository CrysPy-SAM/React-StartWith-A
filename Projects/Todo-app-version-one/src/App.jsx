import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem2 from "./Components/TodoItem2";
import Todoitem1 from "./Components/Todoitem1";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <Todoitem1></Todoitem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;