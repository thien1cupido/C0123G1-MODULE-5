import {ServiceList} from "./service/ServiceList";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {ServiceCreate} from "./service/ServiceCreate";

export function Admin() {
return(
    <>
        <ServiceCreate/>
        {/*<ServiceList/>*/}
    </>
)
}