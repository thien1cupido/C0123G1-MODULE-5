import React from "react";
import {Home} from "./component/home/Home";
import './App.css'
import {AdminFurama} from "./component/admin/AdminFurama";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
    return (
        <>

            <AdminFurama/>
            {/*<Home/>*/}

            <ToastContainer/>
        </>
    );
}

export default App;
