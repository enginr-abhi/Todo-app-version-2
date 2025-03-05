import TodoItem from "./TodoItem";
import Styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={Styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem  todoName={item.name} todoDate ={item.dueDate} key ={item.key}/>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
