import Style from "./App.module.css";
import Display from "./component/Display";
import ButtonContainer from "./component/ButtonContainer";
function App() {
  return (
    <div className={Style.claculator}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
