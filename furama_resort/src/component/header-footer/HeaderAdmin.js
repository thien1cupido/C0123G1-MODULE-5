import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {Field} from "formik";
import {Link} from "react-router-dom";
import React from "react";

export function HeaderAdmin() {
    return (
        <>
            <header  style={{height: '15vh',backgroundColor:'hsl(163,40%,77%)'}}>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid p-2" style={{backgroundColor:'hsl(163,40%,77%)'}}>
                            <div className="col-auto col-sm-2 col-lg-2 d-flex justify-content-center align-items-center">
                                <img
                                    src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt="logo "
                                    className="img-fluid" width="63" height="100"/>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false">
                                            Danh sách
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    {/*<Field className="form-control me-2" type="search" placeholder="Search"*/}
                                    {/*       aria-label="Search"/>*/}
                                    {/*<button className="btn btn-outline-success" type="submit">Search</button>*/}
                                </form>
                            </div>
                        </div>
                    </nav>
            </header>
        </>
    )
}