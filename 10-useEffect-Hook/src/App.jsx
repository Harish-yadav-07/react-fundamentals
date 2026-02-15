import React, { useEffect, useState } from 'react'

const App = () => {

  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  function changeX() {
    console.log("X ki value change ho gayi!")
  }

  function changeY() {
    console.log("Y ki value change ho gayi!")
  }

  useEffect(function () {
    changeX();
  }, [X]);

  useEffect(function () {
    changeY();
  }, [Y]);

  return (
    <div className='main'>
      <h1>X is: {X}</h1>
      <h1>Y is: {Y}</h1>
      <button
        onClick={() => {
          setX(X + 1);
        }}
      >Change X</button>
      <button
        onClick={() => {
          setY(Y - 1);
        }}>Change Y</button>
    </div>
  )
}

export default App;