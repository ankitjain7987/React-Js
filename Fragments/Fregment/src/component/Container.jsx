import Style from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={Style.container}>{children}</div>;
};
export default Container;
