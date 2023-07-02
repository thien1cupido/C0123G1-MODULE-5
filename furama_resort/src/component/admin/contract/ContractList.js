import React, {useEffect, useState} from "react";
import * as contractService from "../../../service/ContractService"
import * as customerService from "../../../service/CustomerService"
import * as facilityService from "../../../service/FacilityService"
import {NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {Modal} from "react-bootstrap";
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";

export function ContractList() {
    const [contractList, setContractList] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [facility, setFacility] = useState([]);
    const [totalPage, setTotalPage] = useState(1);

    const getCustomerApi = async () => {
        const result = await customerService.findAll();
        setCustomer(result.data);
    }
    const getFacilityApi = async () => {
        const result = await facilityService.findAll();
        setFacility(result.data);
    }

    useEffect(() => {
        getContractAllPage(totalPage);
        getCustomerApi();
        getFacilityApi();
    }, [])
    const getContractAllPage = async (page) => {
        let res = await contractService.findAllPage(page);
        setContractList(res.data);
        setTotalPage(Math.ceil((res.headers['x-total-count']) / 5))
    }
    const handlePageClick = (event) => {
        getContractAllPage(event.selected+1)
        setTotalPage(+event.selected+1);
    }
    const [modalDelete, setModalDelete] = useState(false);
    const [deleteContract, setDeleteContract] = useState({
        id: ''
    });

    const sendInfoDeleteContract = (id) => {
        setDeleteContract({
            id: id
        });
    }
    const deleteContractById = async (id) => {
        await contractService.deleteContractById(id);
        Swal.fire({
            icon: "success",
            title: "Đã xóa thành công!!",
            timer: "3000"
        })
        getContractAllPage(totalPage);
        getCustomerApi();
        getFacilityApi();
    }

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
                                <Field className="me-3" placeHolder="Tìm kiếm"/>
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
                        <th>Tên khách hàng</th>
                        <th>Mã dịch vụ</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Tiền đặt cọc</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        contractList.map((contract) => (
                            <tr key={contract.id}>
                                <td>{"HD_" + contract.id}</td>
                                <td>{
                                    customer.find(c => c.id === contract.customerId)?.name
                                }
                                </td>
                                <td>{
                                    facility.find(f => f.id === contract.facilityId)?.name
                                }
                                </td>
                                <td>{contract.startDayContract}</td>
                                <td>{contract.endDayContract}</td>
                                <td>{contract.deposits}</td>
                                <td>
                                    <button className="btn btn-danger ms-3" onClick={() => {
                                        sendInfoDeleteContract(contract.id);
                                        setModalDelete(true);
                                    }}>Xóa
                                    </button>
                                </td>
                            </tr>
                        ))
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
                        Bạn có muốn xóa hợp đồng có mã: <span
                        style={{color: "red"}}>{"HD_" + deleteContract.id}</span> ?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Title>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary mx-3" onClick={() => setModalDelete(false)}>Không
                            </button>
                            <button className="btn btn-danger me-3"
                                    onClick={() => {
                                        deleteContractById(deleteContract.id);
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