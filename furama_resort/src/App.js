import React from "react";
import './App.css'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route} from 'react-router-dom'
import {CustomerList} from "./component/admin/customer/CustomerList";
import {CustomerUpdate} from "./component/admin/customer/CustomerUpdate";
import {HeaderAdmin} from "./component/header-footer/HeaderAdmin";
import {Footer} from "./component/header-footer/Footer";

function App() {
    return (
        <>
            <HeaderAdmin/>
            <Routes>
                <Route path={"/customer/list"} element={<CustomerList/>}/>
                <Route path={"/customer/update/:id"} element={<CustomerUpdate/>}/>
            </Routes>
            <ToastContainer/>
            <Footer/>
        </>
    )
}

export default App;
