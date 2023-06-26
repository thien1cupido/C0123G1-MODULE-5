import {Header} from "../header-footer/Header";
// import "../App.css"
import {TitleRoom} from "./TittleRoom";
import {TypeRoom} from "./TypeRoom";
import {Footer} from "../header-footer/Footer";
import React from "react";

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