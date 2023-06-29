import {FacilityList} from "./facilities/FacilityList";
import React from "react";
import {FacilityCreate} from "./facilities/FacilityCreate";
import {HeaderAdmin} from "../header-footer/HeaderAdmin";
import {ToastContainer} from "react-toastify";

export function AdminFurama() {
return(
    <>
        <HeaderAdmin/>
        <FacilityCreate/>
        {/*<FacilityListHome/>*/}
    </>
)
}