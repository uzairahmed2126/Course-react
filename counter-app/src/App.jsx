import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);

  function handleCounter(e) {
    if (e.target.id === "add") {
      if (counter < 20) {
        counter++;
        setCounter(counter);
      }
    } else if (e.target.id === "remove") {
      if (counter > 0) {
        counter--;
        setCounter(counter);
      }
    }
  }
  return (
    <>
      <div onClick={handleCounter} id="main-container">
        <h1>Counter value is : {counter}</h1>
        <button id="add">Add value</button>
        <button id="remove">Remove value</button>
      </div>
    </>
  );
}

export default App;
