import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem from "./components/Todoitem";
import Todoitem1 from "./components/Todoitem1";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />

      <Todoitem />
      <Todoitem1 />
    </center>
  );
}

export default App;
