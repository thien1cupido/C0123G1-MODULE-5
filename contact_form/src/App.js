
import './App.css';
import {ContactCreate} from "./component/ContactCreate";
import React from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
    return (
        <>
            <ContactCreate/>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
