import React, {useEffect, useState} from "react";
import * as facilitiesService from "../../../service/FacilityService";
import {Field, Form, Formik} from "formik";
import {NavLink} from "react-router-dom";

export function FacilityList() {
    const [facilities, setFacilities] = useState([]);
    const [facilitiesType, setFacilitiesType] = useState([]);
    const [rentalType, setRentalType] = useState([]);

    const getFacilitiesApi = async () => {
        const facilityList = await facilitiesService.findAll();
        setFacilities(facilityList.data);
    }
    const getFacilityTypes = async () => {
        const facilityType = await facilitiesService.findAllFacilityType();
        setFacilitiesType(facilityType.data);
    }

    const getRentalTypeApi = async () => {
        const rentalType = await facilitiesService.findAllRentalType();
        setRentalType(rentalType.data);
    }

    useEffect(() => {
        getFacilitiesApi();
        getFacilityTypes();
        getRentalTypeApi();
    }, [])
    return (
        <>
            <div className="container" style={{marginTop: '25vh', marginBottom: '15vh'}}>
                <div className="py-5 d-flex justify-content-xxl-between justify-content-xl-between">
                    <div className="d-flex align-items-center ms-5">
                        <NavLink to="/facility/create">
                        <button className="btn btn-success">Thêm mới</button>
                        </NavLink>
                    </div>
                    <h1 >Danh sách dịch vụ</h1>
                    <div className="d-flex align-items-center">
                        <Formik>
                            <Form className="d-flex">
                                <Field className="me-3"placeHolder="Tìm kiếm"/>
                                <div>
                                    <button className="btn btn-outline-info">Tìm</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <table className="table table-striped text-center">
                    <thead>
                    <tr>
                        <th>Mã dịch vụ</th>
                        <th>Tên dịch vụ</th>
                        <th>Diện tích sử dụng(m<sup>2</sup>)</th>
                        <th>Chi phí thuê($)</th>
                        <th>Loại dịch vụ</th>
                        <th>Kiểu thuê</th>
                        <th colSpan={'2'}>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        facilities.map((f, index) => (
                            <tr key={index}>
                                <td>{"DV_" + f.id}</td>
                                <td>{f.name}</td>
                                <td>{f.usableArea}</td>
                                <td>{f.rentalCosts}</td>
                                <td>
                                    {
                                        facilitiesType.find(ft => ft.id === f.facilityType)?.name
                                    }
                                </td>
                                <td>
                                    {
                                        "Theo " + rentalType.find(rt => rt.id === f.rentalType)?.name
                                    }
                                </td>
                                <td>
                                    <button className="btn btn-warning me-1">Sửa</button>
                                    <button className="btn btn-danger ms-2">Xóa</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}