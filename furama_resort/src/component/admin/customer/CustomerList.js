import React, {useEffect, useState} from "react";
import * as customerService from "../../../service/CustomerService"
import {NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const [customerTypes, setCustomerTypes] = useState([]);
    const getCustomerApi = async () => {
        const result = await customerService.findAll();
        setCustomerList(result.data);
    }
    const getCustomerTypesApi = async () => {
        const result = await customerService.findCustomerType();
        setCustomerTypes(result.data);
    }
    useEffect(() => {
        getCustomerTypesApi();
    }, [])
    useEffect(() => {
        getCustomerApi();
    }, [])
    return (
        <>
            <div className="container" style={{marginTop: '25vh', marginBottom: '15vh'}}>
                <div className="py-5 d-flex justify-content-xxl-between justify-content-xl-between">
                    <div className="d-flex align-items-center ms-5">
                        <NavLink to="/customer/create">
                            <button className="btn btn-success">Thêm mới</button>
                        </NavLink>
                    </div>
                    <h1 >Danh sách khách hàng</h1>
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
                        <th>Id</th>
                        <th>Họ Và Tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Số CMND/CCCD</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Loại khách</th>
                        <th>Địa chỉ</th>
                        <th colSpan='2'>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        customerList.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.birthOfDay}</td>
                                <td>{customer.gender ? "Nam" : "Nữ"}</td>
                                <td>{customer.citizenIdentification}</td>
                                <td>{customer.phoneNumber}</td>
                                <td>{customer.email}</td>
                                <td>{
                                    customerTypes.find(c => c.id === customer.customerType)?.name
                                }
                                </td>
                                <td>{customer.address}</td>
                                <td>
                                    <NavLink to={`/customer/update/${customer.id}`}>
                                        <button className="btn btn-warning">Sửa</button>
                                    </NavLink>
                                    <button className="btn btn-danger ms-3">Delete</button>
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