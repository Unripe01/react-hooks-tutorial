import {
  useEffect,
  useState,
  useContext,
  useRef,
  useReducer,
  useMemo,
  useCallback,
} from "react";
import "./App.css";
import SomeChild from "./SomeChild";
import useLocalStorage from "./useLocalStorage";
// このコメントを外すと無限ループになる
// import ShinCodeContext from "./main";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    console.log("hello");
    // setCount(count + 1); useEffect内ではセッターは呼ばない -> 無限ループになる

    // return () => alert("goodbye"); //unmount時に実行される
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  };

  // UseMemo
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  // const square = () => {
  //   let i = 0;
  //   while (i < 2000000000) {
  //     i++;
  //   }
  //   return count02 * count02;
  // };

  const square = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return count02 * count02;
  }, [count02]);

  const [counter, setCounter] = useState(0);

  // const showCount = () => {
  //   alert("Heavy process.");
  // };

  const showCount = useCallback(() => {
    // alert("Heavy process.");
  }, [counter]);

  //Custom Hook
  const [age, setAge] = useLocalStorage("age", 24);

  return (
    <div className="App">
      <h1>UseState, UseEffect</h1>
      <button onClick={() => setCount(count + 1)}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>UseContext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>UseRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>Count: {state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>

      <hr />
      <h1>UseMemo</h1>
      <div>Count1: {count01}</div>
      <div>Count2: {count02}</div>
      <div>Result: {square}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>

      <hr />
      <h1>UseCallbak</h1>
      <SomeChild showCount={showCount} />

      <hr />
      <h1>Custom Hook</h1>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>Set Age</button>
    </div>
  );
}

export default App;
