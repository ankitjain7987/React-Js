import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoAllitem from "./components/TodoAllitems";

import "./App.css";
let allData = [
  {
    name: "Milh",
    date: "18/07/2025",
  },
  {
    name: "Milh",
    date: "18/07/2025",
  },
  {
    name: "Milh",
    date: "18/07/2025",
  },
  {
    name: "Milh",
    date: "18/07/2025",
  },
];
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoAllitem allData={allData}></TodoAllitem>
    </center>
  );
}

export default App;
