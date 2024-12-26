import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-yellow-900 text-green-600 text-20">Hello</h1>
      <Card
        username={"uzair"}
        text={"Hello i'm a react dev..."}
        btn={"check out!"}
      />
      <Card
        username={"Ahmed"}
        text={"Hello i'm a full-stack dev..."}
        btn={"click it!"}
      />
    </>
  );
}

export default App;
