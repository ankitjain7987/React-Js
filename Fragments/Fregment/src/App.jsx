import Fooditem from "./component/fooditem";
import ErrorMessage from "./component/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let fooditem = ["mango", "banana", "kiwi", "orange"];

  // first typeof if condition

  // if (fooditem.length === 0) {
  //   return <h2>Nothing to show</h2>;
  // }

  // second ternary operator

  // let empty = fooditem.length === 0 ? <h2>Nothing to show</h2> : null;
  return (
    <>
      <h1 className="">Healthy Food</h1>
      <ErrorMessage items={fooditem}></ErrorMessage>
      <Fooditem fooditem={fooditem}> </Fooditem>
    </>
  );
}

export default App;
