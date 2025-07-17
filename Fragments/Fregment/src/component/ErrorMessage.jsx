const ErrorMessage = ({ items }) => {
  //   let fooditem = ["mango", "banana", "kiwi", "orange"];
  return (
    <>
      {/* third conditional operator ternary operator */}
      {/* {fooditem.length === 0 ? <h2>Nothing to show</h2> : null} */}
      {items.length === 0 && <h2>i am still hungry</h2>}
    </>
  );
};
export default ErrorMessage;

/* third conditional operator ternary operator */

/* {fooditem.length === 0 ? <h2>Nothing to show</h2> : null} */

/* {fooditem.length === 0 && <h2>i am still hungry</h2>} */
