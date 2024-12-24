import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 0;
  function handleCounter(e) {
    if (e.target.id === "add") {
      counter++;
      setCounter(counter);
      console.log("add");
    } else if (e.target.id === "remove") {
      counter--;
      setCounter(counter);
      console.log("remove");
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
