import TodoItem from "./TodoItem"; 

const TodoItems = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem 
          key={index} 
          todoName={item.name} 
          todoDate={item.dueDate} 
        />
      ))}
    </>
  );
};

export default TodoItems;
