import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Allitem from "./components/Allitems";

import "./App.css";

function App() {
  const itemTodo = [
    {
      name: "milk",
      date: "18/07/2025",
    },
    {
      name: "milk",
      date: "18/07/2025",
    },
    ,
    {
      name: "milk",
      date: "18/07/2025",
    },
    ,
    {
      name: "milk",
      date: "18/07/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Allitem itemTodo={itemTodo}></Allitem>
    </center>
  );
}

export default App;
