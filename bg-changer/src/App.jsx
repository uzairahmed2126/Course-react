import { useState } from "react";

function changeColor(e) {
  let hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e"];
  let result = "#";
  for (let i = 0; i < 6; i++) {
    let ind = Math.floor(Math.random() * hexa.length);
    result += hexa[ind];
  }
  return (document.body.style.background = result);
}
function App() {
  const [color, setColor] = useState("#000");
  return (
    <>
      <div id="main-container" className="justify-center text-center mt-80 ">
        <button
          className="rounded-xl border-2 border-black p-2 bg-slate-800 text-yellow-500"
          onClick={changeColor}
        >
          Change Bg-color
        </button>
      </div>
    </>
  );
}

export default App;
