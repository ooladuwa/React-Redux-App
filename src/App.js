import "./App.css";
import React from "react";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div>
      <h1 className="font-mono text-6xl text-center">
        Random Chuck Norris Quote Generator
      </h1>
      <Jokes />
    </div>
  );
}

export default App;
