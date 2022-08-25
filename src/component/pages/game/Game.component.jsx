import { useState, useEffect } from "react";
const Game = () => {
    const [time,setTime]=useState({})
  const [level, setLevel] = useState(() => {
    return 0;
  });
//   useEffect(() => {
//     alert("hi");
//   }, [level]);

  const up = () => {
    setLevel((prevlevel) => prevlevel + 1);
  };
  return (
    <>
      <h1>game :{level}</h1>
      <button onClick={up}>up</button>
    </>
  );
};

export default Game;
