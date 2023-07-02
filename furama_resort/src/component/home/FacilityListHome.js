import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as facilityService from "../../service/FacilityService";
import {Button, Modal} from "react-bootstrap";
import ReactPaginate from "react-paginate";


export function FacilityListHome() {
    const [facility, setFacility] = useState([]);
    const [deleteFaciltys, setDeleteFacilty] = useState({
        id: '',
        name: ''
    });
    const [totalPage, setTotalPage] = useState(0)
    const [modalDelete, setModalDelete] = useState(false);

    const sendInfoDeleteFacility = (id, name) => {
        setDeleteFacilty({
            id: id,
            name: name
        });
    }
    const deleteFacility = async (id) => {
        await facilityService.deleteFacility(id);
    }
    const getFacilityAllPage = async (page) => {
        let res = await facilityService.findAllPage(page);
        setFacility(res.data);
        setTotalPage(Math.ceil((res.headers['x-total-count']) / 9))
    }
    const handlePageClick = (event) => {
        getFacilityAllPage(event.selected + 1)
        setTotalPage(+event.selected + 1);
    }
    useEffect(() => {
        getFacilityAllPage(totalPage);
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-10 col-xxl-10 ">
                                <div className="row d-flex">
                                    {
                                        facility.map((facilities, index) => (
                                            <div className="col-4 py-5 d-flex justify-content-center">
                                                <div className="card" style={{width: "18rem"}} key={index}>
                                                    <img src={facilities.image}
                                                         className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <div className="p-3">
                                                            <h4>{facilities.name}</h4>
                                                            <p className="m-0"><span style={{fontWeight: 'bold'}}>Diện tích:</span> {facilities.usableArea} m<sup>2</sup>
                                                            </p>
                                                            <p className="m-0"><span style={{fontWeight: 'bold'}}>Số người tối đa:</span> {facilities.maximumNumber} người
                                                            </p>
                                                        </div>
                                                        <div className="d-flex justify-content-around">
                                                            <Link to={`/facility/update/${facilities.id}`}>
                                                                <Button variant="primary">
                                                                    Sửa
                                                                </Button>
                                                            </Link>
                                                            <button className="btn btn-danger"
                                                                    onClick={() => {
                                                                        setModalDelete(true);
                                                                        sendInfoDeleteFacility(facilities.id, facilities.name);
                                                                    }}
                                                            >Xóa
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="d-flex justify-content-center py-5">
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel="Sau >"
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={9}
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
                        </div>
                    </div>
                </div>
            </div>
            {/*Modal   Xóa*/}
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
                        Bạn có muốn xóa dịch vụ tên <span style={{color: "red"}}>{deleteFaciltys.name}</span> ?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Title>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary mx-3" onClick={() => setModalDelete(false)}>Không
                            </button>
                            <button className="btn btn-danger me-3"
                                    onClick={() => {
                                        deleteFacility(deleteFaciltys.id);
                                        setModalDelete(false)
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