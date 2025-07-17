// const Item = (props) => {
const Item = ({ fooditem }) => {
  // let {fooditem}=props
  return <li className="list-group-item">{fooditem}</li>;
};

export default Item;
