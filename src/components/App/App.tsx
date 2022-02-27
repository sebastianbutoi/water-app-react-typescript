import { useState } from "react";
import "./App.css";
import Button from "../Button";
import StatusBar from "../StatusBar";

function App(): JSX.Element {
  const [counter, setCounter] = useState(0);

  function incrementBy100(): void {
    if (counter < 2000) {
      setCounter(counter + 100);
    } else {
      setCounter(2000);
      alert("GOOOOD JOB");
    }
  }
  function incrementBy300(): void {
    if (counter < 2000) {
      setCounter(counter + 300);
    } else {
      setCounter(2000);
      alert("GOOOOD JOB");
    }
  }
  function reset(): void {
    setCounter(0);
  }

  function calculateDate(): string {
    const today = new Date();
    const dd = String(today.getDate());
    const mm = String(today.getMonth() + 1);
    const yyyy = today.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
  }
  
  return (
    <div className="App">
      <h1>Water Tracker App</h1>
      <h4>{calculateDate()}</h4>
      <p style={{ fontSize: "40px" }}>
        Goal 2000ml - Today: {(100 * counter) / 2000 + "%"}
      </p>
      <StatusBar innerWidth={(100 * counter) / 2000 + "%"} />
      <p>{counter} ml</p>
      <Button text="+100ml" handleClick={incrementBy100} />
      <Button text="+300ml" handleClick={incrementBy300} />
      <Button text="Reset" handleClick={reset} />
    </div>
  );
}

export default App;
