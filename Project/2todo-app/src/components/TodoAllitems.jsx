import Todoitem from "./Todoitem";
function TodoAllitem({ allData }) {
  return (
    <div className="item-container">
      {allData.map((item) => (
        <Todoitem itemname={item.name} itemdate={item.date}></Todoitem>
      ))}
    </div>
  );
}
export default TodoAllitem;
