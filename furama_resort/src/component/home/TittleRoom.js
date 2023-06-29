import React, {useState} from "react";
import "../../App.css"

export function TitleRoom() {
    const [titles, setTitles] = useState('LOẠI PHÒNG')
    const handleTitle = (values) => {
        setTitles(values);
    }
    return (
        <>
            <div style={{height:'15vh'}}>

            </div>
            <div className="vc_custom_1533119100314 d-flex align-items-center justify-content-center">
                <h1 style={{color: 'white'}}>{titles}</h1>
            </div>
        </>
    )
}