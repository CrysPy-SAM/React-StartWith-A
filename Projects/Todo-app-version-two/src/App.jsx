import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023"
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023"
    }
  ];

  return (
    <div className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems></TodoItems>
      <div className="items-container">
        {todoItems.map((item, index) => (
          <TodoItem 
            key={index} 
            todoDate={item.dueDate} 
            todoName={item.name} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
