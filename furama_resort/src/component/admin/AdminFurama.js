import {ServiceList} from "./service/ServiceList";
import React from "react";
import {ServiceCreate} from "./service/ServiceCreate";
import {HeaderAdmin} from "../header-footer/HeaderAdmin";
import {ToastContainer} from "react-toastify";

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