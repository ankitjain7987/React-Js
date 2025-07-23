import { useState } from "react";
import Item from "./Item";

const Fooditem = ({ fooditem }) => {
  let [activebutton, setActivebutton] = useState([]);
  let onButtonActive = (event, item) => {
    let newItem = [...activebutton, item];
    setActivebutton(newItem);
  };
  return (
    <>
      <ul className="list-group ak-ul">
        {fooditem.map((item) => (
          <Item
            key={item}
            fooditem={item}
            bot={activebutton.includes(item)}
            buttonOnclick={(event) => onButtonActive(event, item)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default Fooditem;
