import Todoitem from "./Todoitem";
import Style from "./AddItemTodo.module.css";
function AddItemTodo({ AllData }) {
  return (
    <div className={Style["item-container"]}>
      {AllData.map((item) => (
        <Todoitem
          key={item.id}
          addName={item.name}
          addDate={item.date}
        ></Todoitem>
      ))}
    </div>
  );
}
export default AddItemTodo;
