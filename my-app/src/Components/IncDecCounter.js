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
    <div className="mt-5">
      <h2>Counter: {num}</h2>
      <button type="button" className="btn btn-outline-success mr-3" onClick={incNum}>Increment</button>
      <button type="button" className="btn btn-outline-danger m-3" onClick={decNum}>Decrement</button>
    </div>
  );
}

export default IncDecCounter;