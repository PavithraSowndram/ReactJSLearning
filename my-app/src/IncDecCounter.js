import {useState} from "react";

function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    setNum(Number(num)+1);
  };
  let decNum = () => {
     if(num>0)  setNum(Number(num - 1));
  }
   return(
    <div>
      <h2>Count: {num}</h2>
      <button class="btn" onClick={incNum}>Increment</button>
      <button class="btn" onClick={decNum}>Decrement</button>
    </div>
  );
}

export default IncDecCounter;