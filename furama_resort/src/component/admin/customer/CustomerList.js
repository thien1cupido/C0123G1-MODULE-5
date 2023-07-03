import React, {useEffect, useState} from "react";
import * as customerService from "../../../service/CustomerService"
import {NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {Modal} from "react-bootstrap";
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";

export function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const [customerTypes, setCustomerTypes] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [deleteCustomer, setDeleteCustomer] = useState({
        id: '',
        name: ''
    });
    const [modalDelete, setModalDelete] = useState(false);

    const getCustomerTypesApi = async () => {
        const result = await customerService.findCustomerType();
        setCustomerTypes(result.data);
    }

    const sendInfoDeleteCustomer = (id, name) => {
        setDeleteCustomer({
            id: id,
            name: name
        });
    }

    const getCustomerAllPage = async (page) => {
        let res = await customerService.findAllPage(page);
        setCustomerList(res.data);
        setTotalPage(Math.ceil((res.headers['x-total-count']) / 5))
    }
    const handlePageClick = (event) => {
        getCustomerAllPage(event.selected + 1)
        setTotalPage(+event.selected + 1);
    }
    const deleteCustomerById = async (id) => {
        await customerService.deleteCustomer(id);
        Swal.fire({
            icon: "success",
            title: "Đã xóa thành công!!",
            timer: "3000"
        })
        getCustomerAllPage(totalPage);
        getCustomerTypesApi();
    }
    useEffect(() => {
        getCustomerAllPage(totalPage)
        getCustomerTypesApi();
    }, []);
    return (
        <>
            <div className="container" style={{marginTop: '25vh', marginBottom: '15vh'}}>
                <div className="py-5 d-flex justify-content-xxl-between justify-content-xl-between">
                    <div className="d-flex align-items-center ms-5">
                        <NavLink to="/customer/create">
                            <button className="btn btn-success">Thêm mới</button>
                        </NavLink>
                    </div>
                    <h1>Danh sách khách hàng</h1>
                    <div className="d-flex align-items-center">
                        <Formik initialValues={{
                            nameSearch: ''
                        }}
                                onSubmit={
                                    values => {
                                        const seacrhs = async () => {
                                            const res = await customerService.search(values);
                                            setCustomerList(res.data);
                                        }
                                        seacrhs()
                                    }
                                }>
                            <Form className="d-flex">
                                <Field className="me-3 form-control" name="nameSearch" placeHolder="Tìm kiếm"/>
                                <div>
                                    <button type="submit" className="btn btn-outline-info">Tìm</button>
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
                        customerList.map((customer, index) =>
                            <tr key={index}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.birthOfDay}</td>
                                <td>{customer.gender === 0 ? '' : customer.gender === 1 ? "Nam" : "Nữ"}</td>
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
                                    <button className="btn btn-danger ms-3" onClick={() => {
                                        sendInfoDeleteCustomer(customer.id, customer.name);
                                        setModalDelete(true);
                                    }}>Xóa
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <div className="d-flex justify-content-center py-5">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="Sau >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={totalPage}
                        previousLabel="< Trước"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </div>
            </div>
            {/*    Modal*/}
            <Modal
                show={modalDelete}
                onHide={() => setModalDelete(false)}
                dialogClassName="modal-60w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Xóa !!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Bạn có muốn xóa khách hàng có tên <span style={{color: "red"}}>{deleteCustomer.name}</span> ?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Title>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary mx-3" onClick={() => setModalDelete(false)}>Không
                            </button>
                            <button className="btn btn-danger me-3"
                                    onClick={() => {
                                        deleteCustomerById(deleteCustomer.id);
                                        setModalDelete(false);
                                    }
                                    }>Có
                            </button>
                        </div>
                    </Modal.Title>
                </Modal.Footer>
            </Modal>
        </>
    )
}