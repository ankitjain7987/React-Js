import styles from "./Item.module.css";

// const Item = (props) => {
const Item = ({ fooditem }) => {
  // let {fooditem}=props
  return (
    <li className={`${styles.akitem} list-group-item`}>
      <span className={styles["ak-span"]}>{fooditem}</span>
    </li>
  );
};

export default Item;
