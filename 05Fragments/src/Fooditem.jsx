import Item from "./Item";


const Fooditem = ({foodlist}) =>{
    return(
        <ul className="list-group">
        {foodlist.map((item)=>(<Item key={item} fooditems={item}></Item>))}
      </ul>
    );
}
export default Fooditem