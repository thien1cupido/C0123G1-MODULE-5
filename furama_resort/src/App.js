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
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {FacilityList} from "./component/admin/facilities/FacilityList";
import {FacilityCreate} from "./component/admin/facilities/FacilityCreate";
import {FacilityUpdate} from "./component/admin/facilities/FacilityUpdate";



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
                <Route path={"/facility/list"} element={<FacilityList/>}/>
                <Route path={"/facility/create"} element={<FacilityCreate/>}/>
                <Route path={"/facility/update/:id"} element={<FacilityUpdate/>}/>
            </Routes>
            <Footer/>
            <ToastContainer/>
        </>
    )
}

export default App;
