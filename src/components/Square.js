import React from "react";
import "./squareStyle.scss";
export default function Square(props) {
//   const [buttonState, setButtonState] = useState("");
  return (
    <div>
      <button className="square" onClick={props.onClick}>
        {/* {buttonState} */}
        {props.num}
        
      </button>
    </div>
  );
}
