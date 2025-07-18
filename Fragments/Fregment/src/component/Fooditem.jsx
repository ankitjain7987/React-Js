import Item from "./item";

const Fooditem = ({ fooditem }) => {
  return (
    <>
      <ul className="list-group ak-ul">
        {fooditem.map((item) => (
          <Item key={item} fooditem={item}></Item>
        ))}
      </ul>
    </>
  );
};
export default Fooditem;
