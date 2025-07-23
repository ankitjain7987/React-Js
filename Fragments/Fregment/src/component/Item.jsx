import styles from "./Item.module.css";

// const Item = (props) => {
const Item = ({ fooditem, buttonOnclick, bot }) => {
  // let {fooditem}=props

  // let buttonOnclick = (event) => {
  //   console.log(event);
  // };

  return (
    <li className={`${styles.akitem} list-group-item ${bot && "active"}`}>
      <span className={styles["ak-span"]}>{fooditem}</span>
      <button
        className={`${styles.button} btn btn-success`}
        onClick={buttonOnclick}
        // onClick={() => console.log(` buy ${fooditem}`)}
      >
        buy
      </button>
    </li>
  );
};

export default Item;
