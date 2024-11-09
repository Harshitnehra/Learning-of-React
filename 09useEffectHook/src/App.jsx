import { useEffect, useState } from "react";
import Timercomp from "./Component/Timercomponent";
import DataFetcher from "./Component/DataFetcher";
import "./App.css";
function App() {

// const [count , setcount] = useState(0);
// const [totle , settotle] =useState(1);
// 1 case***************
// useEffect(() => {alert("i will run in each render")})

// 2 case************
// useEffect(() => {
//    alert("i will run only first render")
// }, [])

// 3 case************
// useEffect(() => {
//   alert("i will run only first render")
// }, [count])

// 3 case************
// useEffect(() => {
//   alert("ui is update")

//   return () => {
//     alert("count is unmount from ui ")
//   }
// }, [count])

// function handleclick(){
//   setcount(count + 1)
// }
// function subclick(){
//   setcount(count - 1)
// }
// function hundleclicktotle(){
//   settotle(totle +1)
// }
  return (  
  <div>
    
    {/* <Timercomp></Timercomp> */}
    <DataFetcher></DataFetcher>
   {/* <button onClick={handleclick}>click to add</button>
   <button onClick={subclick}>click to sub</button>
   <br />
   click me to add or seb :{count}
   <br />
   <button onClick={hundleclicktotle}>update totle</button>
   <br />
   totle is :{totle} */}
  </div>
      )
}

export default App
