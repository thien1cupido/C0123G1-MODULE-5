import './App.css';
import React from "react";
import {CounterComponent1, CounterComponent2} from "./component/CounterComponet";

function App() {
  return (
    <div className="App">
      <CounterComponent1/>
      <CounterComponent2/>
    </div>
  );
}

export default App;
