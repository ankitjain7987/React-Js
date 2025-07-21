import Item from "./Item";

const Fooditem = ({ fooditem }) => {
  return (
    <>
      <ul className="list-group ak-ul">
        {fooditem.map((item) => (
          <Item
            key={item}
            fooditem={item}
            buttonOnclick={() => console.log(item)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default Fooditem;
