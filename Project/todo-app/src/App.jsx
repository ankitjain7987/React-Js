import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem from "./components/Todoitem";
import Todoitem1 from "./components/Todoitem1";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
        <Todoitem />
        <Todoitem1 />
      </div>
    </center>
  );
}

export default App;
