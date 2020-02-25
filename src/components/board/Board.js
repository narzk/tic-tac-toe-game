import React, {useState,useEffect} from "react";
import "./boardStyle.scss";
import Square from "../Square";


export default function Board() {
    const [arrayState, setArrayState]=useState(Array(9).fill(9));
    
const handelClick =(i)=>{
arrayState[i]="X"
setArrayState(arrayState);

console.log(arrayState[0])
}

  return (
    <div className="board">
      <div className="board__row">
        <Square num={arrayState[0]} onClick={()=>handelClick(0)}/>
        <Square num={1} onClick={()=>handelClick(0)}/>
        <Square num={2} onClick={()=>handelClick(0)}/>
      </div>
      <div className="board__row">
        <Square num={3} onClick={()=>handelClick(0)}/>
        <Square num={4} onClick={()=>handelClick(0)}/>
        <Square num={5} onClick={()=>handelClick(0)}/>
      </div>
      <div className="board__row">
        <Square num={6} onClick={()=>handelClick(0)}/>
        <Square num={7} onClick={()=>handelClick(0)}/>
        <Square num={8} onClick={()=>handelClick(0)}/>
      </div>
    </div>
  );
}
