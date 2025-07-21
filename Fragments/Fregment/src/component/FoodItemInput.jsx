import Style from "./Foodinput.module.css";

function FooditemInput({ clickOnKeydown }) {
  // const inputOnchange = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <input
      className={Style.FoodInput}
      type="text"
      placeholder="enter your foodItem"
      onKeyDown={clickOnKeydown}
    />
  );
}
export default FooditemInput;
