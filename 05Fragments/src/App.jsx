import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [fooditems, setfooditems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let addfood = event.target.value;
      let addfooditems = [...fooditems, addfood];
      setfooditems(addfooditems);
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={fooditems}></ErrorMessage>
        <FoodItems items={fooditems}></FoodItems>
      </Container>
    </>
  );
}
export default App;
