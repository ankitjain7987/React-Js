import styles from "./Item.module.css";

// const Item = (props) => {
const Item = ({ fooditem }) => {
  // let {fooditem}=props

  let buttonOnclick = (event) => {
    console.log(event);
  };

  return (
    <li className={`${styles.akitem} list-group-item`}>
      <span className={styles["ak-span"]}>{fooditem}</span>
      <button
        className={`${styles.button} btn btn-success`}
        onClick={(event) => buttonOnclick(event)}
        // onClick={() => console.log(` buy ${fooditem}`)}
      >
        buy
      </button>
    </li>
  );
};

export default Item;
