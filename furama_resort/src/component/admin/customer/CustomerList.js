import React, {useEffect, useState} from "react";
import * as customerService from "../../../service/CustomerService"
import {NavLink} from "react-router-dom";

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
            <div className="container" style={{marginTop: '15vh'}}>
                <h1 className="text-center py-5">Danh sách khách hàng</h1>
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
                <div style={{height: '15vh'}}></div>
            </div>
        </>
    )
}