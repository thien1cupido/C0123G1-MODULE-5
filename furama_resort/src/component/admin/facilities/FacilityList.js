import React, {useEffect, useState} from "react";
import * as facilitiesService from "../../../service/FacilityService";
import {Field, Form, Formik} from "formik";
import {Link, NavLink} from "react-router-dom";
import {Modal} from "react-bootstrap";
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";
import * as facilityService from "../../../service/FacilityService";

export function FacilityList() {
    const [facilities, setFacilities] = useState([]);
    const [facilitiesType, setFacilitiesType] = useState([]);
    const [rentalType, setRentalType] = useState([]);
    const [deleteFacility, setDeleteFacility] = useState({
        id: '',
        name: ''
    });
    const [modalDelete1, setModalDelete1] = useState(false);
    const [totalPage, setTotalPage] = useState(0);

    const getFacilityTypes = async () => {
        const facilityType = await facilitiesService.findAllFacilityType();
        setFacilitiesType(facilityType.data);
    }

    const getRentalTypeApi = async () => {
        const rentalType = await facilitiesService.findAllRentalType();
        setRentalType(rentalType.data);
    }
    const sendInfoDeleteFacitlity = (id, name) => {
        setDeleteFacility({
            id: id,
            name: name
        });
    }
    const getFacilityAllPage = async (page) => {
        let res = await facilityService.findAllPageLimit(page);
        setFacilities(res.data);
        setTotalPage(Math.ceil((res.headers['x-total-count']) / 5))
    }
    const handlePageClick = (event) => {
        getFacilityAllPage(event.selected + 1)
        setTotalPage(+event.selected + 1);
    }
    const deleteFacilityById = async (id) => {
        await facilitiesService.deleteFacility(id);
        setModalDelete1(false);
        Swal.fire({
            icon: "success",
            title: "Đã xóa thành công!!",
            timer: "3000"
        })
        getFacilityAllPage(totalPage);
        getFacilityTypes();
        getRentalTypeApi();
    }
    useEffect(() => {
        getFacilityAllPage(totalPage);
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
                    <h1>Danh sách dịch vụ</h1>
                    <div className="d-flex align-items-center">
                        <Formik initialValues={{
                            search: ''
                        }}
                                onSubmit={values => {
                                    const search = async () => {
                                        const res = await facilityService.searchByName(values);
                                        setFacilities(res.data);
                                    }
                                    search();
                                }}>
                            <Form className="d-flex">
                                <Field className="me-3 form-control" name="search" placeHolder="Tìm kiếm"/>
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
                                        facilitiesType.find(ft => ft.id == f.facilityType)?.name
                                    }
                                </td>
                                <td>
                                    {
                                        "Theo " + rentalType.find(rt => +rt.id === f.rentalType)?.name
                                    }
                                </td>
                                <td>
                                    <Link to={`/facility/update/${f.id}`}>
                                        <button className="btn btn-warning">Sửa</button>
                                    </Link>
                                    <button className="btn btn-danger ms-3" onClick={() => {
                                        sendInfoDeleteFacitlity(f.id, f.name);
                                        setModalDelete1(true);
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
                show={modalDelete1}
                onHide={() => setModalDelete1(false)}
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
                        Bạn có muốn xóa dịch vụ tên <span style={{color: "red"}}>{deleteFacility.name}</span> ?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Title>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary mx-3" onClick={() => setModalDelete1(false)}>Không
                            </button>
                            <button className="btn btn-danger me-3"
                                    onClick={() => {
                                        deleteFacilityById(deleteFacility.id);
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