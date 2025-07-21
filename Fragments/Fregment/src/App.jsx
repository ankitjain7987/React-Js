import Fooditem from "./component/fooditem";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import FooditemInput from "./component/FoodItemInput";
import "./App.css";

function App() {
  let fooditem = ["mango", "banana", "kiwi", "orange"];

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <ErrorMessage items={fooditem}></ErrorMessage>
        <FooditemInput></FooditemInput>
        <Fooditem fooditem={fooditem}> </Fooditem>
      </Container>
    </>
  );
}

export default App;
