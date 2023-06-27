import {ServiceList} from "./facilities/ServiceList";
import React from "react";
import {ServiceCreate} from "./facilities/ServiceCreate";
import {HeaderAdmin} from "../header-footer/HeaderAdmin";
import {ToastContainer} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export function AdminFurama() {
return(
    <>
        <HeaderAdmin/>
        <ServiceCreate/>
        {/*<ServiceList/>*/}
        <ToastContainer/>
    </>
)
}