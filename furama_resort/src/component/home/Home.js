
import "../../App.css"
import "bootstrap/dist/js/bootstrap"
import React from "react";
import {TitleRoom} from "./TittleRoom";
import {TypeRoom} from "./TypeRoom";


export function Home() {
    return (
        <>
            <TitleRoom/>
            <TypeRoom/>
        </>
    )
}