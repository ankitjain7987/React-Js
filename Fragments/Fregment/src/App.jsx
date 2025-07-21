import Fooditem from "./component/Fooditem";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import FooditemInput from "./component/FoodItemInput";
import "./App.css";
import { useState } from "react";

function App() {
  let [fooditem, setFoodItem] = useState([]);

  const OnKeydown = (event) => {
    if (event.key === "Enter") {
      let newFooditem = event.target.value;
      let newItem = [...fooditem, newFooditem];
      setFoodItem(newItem);
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <FooditemInput clickOnKeydown={OnKeydown}></FooditemInput>
        <ErrorMessage items={fooditem}></ErrorMessage>

        <Fooditem fooditem={fooditem}> </Fooditem>
      </Container>
    </>
  );
}

export default App;
