import "./App.css";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let counter = useSelector((state) => state.counter);
  let dispatch = useDispatch();
  const handleClick = (type) => {
    dispatch({ type });
  };
  return (
    <div className="App">
      <div className="App-header">
        <div>
          <h3>Counter Apps with Redux</h3>
          <div>{counter}</div>
          <button className="btn" onClick={(e) => handleClick("add")}>
            Add
          </button>
          <button className="btn" onClick={(e) => handleClick("minus")}>
            Subtract
          </button>
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
