import './App.css';
import React from "react";
import {CounterComponentOdd,} from "./component/CounterComponentOdd";
import {CounterComponentEven} from "./component/CounterComponentEven";

function App() {
    return (
        <>
            <CounterComponentOdd/>
            <CounterComponentEven/>
        </>
    );
}

export default App;
