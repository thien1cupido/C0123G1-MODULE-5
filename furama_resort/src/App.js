import React from "react";
import './App.css'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route} from 'react-router-dom'
import {CustomerList} from "./component/admin/customer/CustomerList";
import {CustomerUpdate} from "./component/admin/customer/CustomerUpdate";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/customer/list"} element={<CustomerList/>}/>
                <Route path={"/customer/update/:id"} element={<CustomerUpdate/>}/>
            </Routes>
            <ToastContainer/>
        </>
    )
}

export default App;
