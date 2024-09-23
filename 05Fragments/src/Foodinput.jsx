import styles from "./Foodinput.module.css"

const Foodinput = () =>{
    return(
        <input type="text"
        placeholder="add food items"
        className={styles.Foodinput}
        onChange={(events)=>{console.log(events.target.value);
        }}
         />
    );
}
export default Foodinput