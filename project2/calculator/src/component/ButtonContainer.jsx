import Style from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  const button = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "=",
    ".",
    "0",
  ];
  return (
    <div className={Style.buttonContainer}>
      {button.map((icon) => (
        <button className={Style.button}>{icon}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
