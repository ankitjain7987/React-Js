import Fooditem from "./component/fooditem";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
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
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <ErrorMessage items={fooditem}></ErrorMessage>
        <Fooditem fooditem={fooditem}> </Fooditem>
      </Container>
    </>
  );
}

export default App;
