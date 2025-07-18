import Todoitem from "./Todoitem";

function Allitem({ itemTodo }) {
  return (
    <div className="item-container">
      {itemTodo.map((item) => (
        <Todoitem
          key={item}
          createName={item.name}
          createDate={item.date}
        ></Todoitem>
      ))}
    </div>
  );
}
export default Allitem;
