import React from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route} from 'react-router-dom'
import {CustomerList} from "./component/admin/customer/CustomerList";
import {CustomerUpdate} from "./component/admin/customer/CustomerUpdate";
import {HeaderAdmin} from "./component/header-footer/HeaderAdmin";
import {Footer} from "./component/header-footer/Footer";
import {CustomerCreate} from "./component/admin/customer/CustomerCreate";
import {Home} from "./component/home/Home";
import {ContractList} from "./component/admin/contract/ContractList";
import {ContractCreate} from "./component/admin/contract/ContractCreate";

function App() {
    return (
        <>
            <HeaderAdmin/>
            <Routes>
                <Route path={"/customer/list"} element={<CustomerList/>}/>
                <Route path={"/customer/update/:id"} element={<CustomerUpdate/>}/>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/customer/create"} element={<CustomerCreate/>}/>
                <Route path={"/contract/list"} element={<ContractList/>}/>
                <Route path={"/contract/create"} element={<ContractCreate/>}/>
            </Routes>
            <Footer/>
            <ToastContainer/>
        </>
    )
}

export default App;
