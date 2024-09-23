import styles from "./Item.module.css";

const Item = ({ fooditems }) => {
  return (
    <li className={`${styles["harshit"]} list-group-item `}>
      {fooditems}
      <button
        onClick={() => {
          alert(`${fooditems} is buy`);
        }}
        type="button"
        className="btn btn-success"
      >
        Add
      </button>
    </li>
  );
};
export default Item;
