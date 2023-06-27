import {Header} from "../header-footer/Header";
import "../../App.css"
import "bootstrap/dist/js/bootstrap"
import React from "react";
import {TitleRoom} from "./TittleRoom";
import {TypeRoom} from "./TypeRoom";
import {Footer} from "../header-footer/Footer";


export function Home() {
    return (
        <>
            <Header/>
            <TitleRoom/>
            <TypeRoom/>
            <Footer/>
        </>
    )
}