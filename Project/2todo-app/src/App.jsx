import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddItemTodo from "./components/AddItemTodo";
import "./App.css";

function App() {
  let allItemData = [
    {
      name: "milk",
      date: "19/07/2025",
    },
    {
      name: "Coffee",
      date: "19/07/2025",
    },
    {
      name: "pizza",
      date: "19/07/2025",
    },
    {
      name: "burgher",
      date: "19/07/2025",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <AddItemTodo AllData={allItemData}></AddItemTodo>
    </center>
  );
}

export default App;
