import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {TodoComponent} from "./component/TodoComponent";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <TodoComponent/>
            <ToastContainer/>
        </>
    );
}

export default App;
