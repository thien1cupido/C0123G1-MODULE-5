import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {BookList} from "./component/BookList";
import {BookCreate} from "./component/BookCreate";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BookUpdate} from "./component/BookUpdate";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<BookList/>}/>
                <Route path="/create" element={<BookCreate/>}/>
                <Route path='/update/:id' element={<BookUpdate/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
