import { useState } from "react";
import "./App.css";
import Fooditem from "./fooditem";
import Foodhunger from "./Foodhunger";

function App() {
  const [count, setCount] = useState(0);
  let fooditems = [
    "dal",
    "green veg",
    "A third item",
    "A fourth item",
    "And a fifth one",
    "salid",
    "roti",
  ];


  // if(fooditems.length ===0 ){
  //   return <h1>i am hangry</h1>
  // }
  return (
    <>
      <h1 className="nehra">food item</h1>
      <Foodhunger list={fooditems}></Foodhunger>
      <Fooditem foodlist={fooditems}></Fooditem>
    </>
  );
}

export default App;
