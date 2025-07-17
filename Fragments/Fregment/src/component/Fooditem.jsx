import Item from "./item";
const Fooditem = ({ fooditem }) => {
  //   let fooditem = [];
  //   let fooditem = ["mango", "banana", "kiwi", "orange"];
  return (
    <>
      <ul className="list-group">
        {fooditem.map((item) => (
          <Item key={item} fooditem={item}></Item>
        ))}
      </ul>
    </>
  );
};
export default Fooditem;
