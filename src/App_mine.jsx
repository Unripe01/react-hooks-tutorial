import { useEffect, useState, useContext } from "react";
import "./App.css";
import ShinCodeContext from "./main";

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeContext);

  useEffect(() => {
    console.log("hello");

    // return () => alert("goodbye"); //unmount時に実行される
  }, [count]);

  //useCallback
  //関数のメモ化
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>UseState, UseEffect</h1>
      <button onClick={() => setCount(count + 1)}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>UseContext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>
    </div>
  );
}

export default App;
