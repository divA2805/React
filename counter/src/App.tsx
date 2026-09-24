import { useState , useEffect} from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  //const increase = () => setCount((currentCount) => currentCount + 1)
  const decrease = () =>setCount((currentCount) => (currentCount > 0 ? currentCount - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div>
      <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <div>
          <button type="button" onClick={decrease}>
            -
          </button>
          <button type="button" onClick={reset}>
            Reset
          </button>
          <button type="button" onClick={decrease}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
