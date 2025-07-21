import Style from "./Foodinput.module.css";

function FooditemInput() {
  const inputOnchange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      className={Style.FoodInput}
      type="text"
      placeholder="enter your foodItem"
      onChange={inputOnchange}
    />
  );
}
export default FooditemInput;
