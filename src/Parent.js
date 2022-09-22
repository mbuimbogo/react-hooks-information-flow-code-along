import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

// function Parent() {
//   const randomColor = getRandomColor();
//   const [color, setColor] = useState(randomColor);  // initial value for color state

function Parent () {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState('FFF'); // This represents the color of the two child components lives in Parent -- now we pass the data down as props

  return (
    <div className = 'parent' style= {{backgroundColor: color}}>
      <Child color = {childrenColor} onChangeColor={handleChangeColor}/>
      <Child color = {childrenColor} onChangeColor= {handleChangeColor}/>
    </div>
  )
  function handleChangeColor(newChildColor){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  }
}
// }
//   function handleChangeColor() {
//     const newRandomColor = getRandomColor();
//     setColor(newRandomColor); // update color state to a new value
//   }

  // return (
  //   <div className="parent" style={{ backgroundColor: color }}>
  //     <Child onChangeColor={handleChangeColor} />
  //     <Child onChangeColor={handleChangeColor} />
  //   </div>
  // );
// }

export default Parent;
