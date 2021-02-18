import "./App.css";
import React from "react";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div>
      <h1 className="font-mono text-4xl text-center text-transform-uppercase">
        Random Chuck Norris Quote Generator
      </h1>
      <Jokes className="text-xl" />
    </div>
  );
}

export default App;
