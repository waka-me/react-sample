import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage.jsx";

const App = () => {
  console.log("start");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const clickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-line
  }, [num]);
  return (
    <>
      <h1 style={{ color: "red" }}>Hello World</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm fine</ColorfulMessage>
      <button onClick={onClickCountUp}>Count Up</button>
      <br />
      <button onClick={clickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>("")</p>}
    </>
  );
};

export default App;
