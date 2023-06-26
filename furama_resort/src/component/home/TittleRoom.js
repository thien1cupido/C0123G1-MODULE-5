import {useState} from "react";

export function TitleRoom() {
    const [titles,setTitles]=useState('LOẠI PHÒNG')
    const handleTitle=(values)=>{
        setTitles(values);
    }
    return (
        <>
            <div className="vc_custom_1533119100314 d-flex align-items-center justify-content-center">
                <h1 style={{color:'white'}} >{titles}</h1>
            </div>
        </>
    )
}