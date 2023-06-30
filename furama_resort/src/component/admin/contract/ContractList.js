import React, {useEffect, useState} from "react";
import * as contractService from "../../../service/ContractService"
import {NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export function ContractList() {
    const [contractList, setContractList] = useState([]);
    const [customer, setCustomer] = useState(null);
    const fetchApi = async () => {
        const result = await contractService.findAll();
        setContractList(result.data);
    }
    useEffect(() => {
        fetchApi();
    }, [])
    return (
        <>
            <div className="container" style={{marginTop: '25vh', marginBottom: '15vh'}}>
                <div className="py-5 d-flex justify-content-xxl-between justify-content-xl-between">
                    <div className="d-flex align-items-center ms-5">
                        <NavLink to="/contract/create">
                            <button className="btn btn-success">Thêm mới</button>
                        </NavLink>
                    </div>
                    <h1>Danh sách hợp đồng</h1>
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
                        <th>Mã hợp đồng</th>
                        <th>Mã khách hàng</th>
                        <th>Mã dịch vụ</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Tiền đặt cọc</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        contractList.map((contract) => (
                            <tr key={contract.id}>
                                <td>{"HD_"+contract.id}</td>
                                <td>{contract.customer||''}</td>
                                <td>{contract.facility}</td>
                                <td>{contract.startDayContract}</td>
                                <td>{contract.endDayContract}</td>
                                <td>{contract.deposits}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}