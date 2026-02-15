import { useState } from "react";

const App = () => {

  const [num, setNum] = useState(0);

  function increseNum(){
    setNum(num+1);
  }
  function decreseNum(){
    setNum(num-1);
  }
  function jump5Num(){
    setNum(num+5);
  }
  function resetNum(){
    setNum(0);
  }

  return (
    <div>
      <h1>Value is {num}</h1>
      <button onClick={decreseNum} className="bg-blue-50">Decrease</button>
      <button onClick={increseNum}>Increase</button>
      <button onClick={jump5Num}>Increase by 5</button>
      <button onClick={resetNum}>Reset</button>
    </div>
  )
}

export default App; 