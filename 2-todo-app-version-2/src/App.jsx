import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import './components/App.css';
import TodoItems from "./TodoItems";

function App() {
  const todoItems = [{
    id : 0,
    name:'Buy Milk',
    dueDate:'05/03/2025'
  },{
    id : 1,
    name:'Go to college',
    dueDate:'05/03/2025'
  },
  {
    id : 2,
    name:'Like this video',
    dueDate:'right now'
  }]
  return (
    <center className="todo-conatiner">
      <AppName />
      <AddTodo />
      <TodoItems todoItems ={todoItems} />      
    </center>
  );
}

export default App;
