import { useEffect ,useState } from "react";

function Timercomp() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    console.log("run");
    
    const intervalId = setInterval(()=>{ console.log("run");setSeconds(prevSeconds => prevSeconds + 1)},1000);
  
    return () => {
        console.log("time to stop");
        
        clearInterval(intervalId);
    }
  }, [])
  
  return (
    <div>
      <button>click me</button>
      <h1>Seconds: {seconds}</h1>
    </div>
  );
}
export default Timercomp;
