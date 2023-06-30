import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as facilityService from "../../service/FacilityService";
import {Button, Modal} from "react-bootstrap";

export function FacilityListHome() {
    const [facility, setFacility] = useState([]);
    const [deleteFaciltys, setDeleteFacilty] = useState({
        id: '',
        name: ''
    });
    const [modalDelete, setModalDelete] = useState(false);

    const getFacilitiesApi = async () => {
        const result = await facilityService.findAll();
        setFacility(result.data);
    }
    const sendInfoDeleteFacility = (id, name) => {
        setDeleteFacilty({
            id: id,
            name: name
        });
    }

    const deleteFacility = async (id) => {
        await facilityService.deleteFacility(id);
    }
    useEffect(() => {
        getFacilitiesApi();
    }, [facility])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-10 col-xxl-10 ">
                                <div className="row d-flex">
                                    {
                                        facility.map((facilities) => (
                                            <div className="col-4 py-5 d-flex justify-content-center">
                                                <div className="card" style={{width: "18rem"}} key={facilities.id}>
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
                                                                </Button></Link>
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
                                <nav className="py-5">
                                    <ul className="pagination d-flex justify-content-center flex-wrap pagination-rounded-flat pagination-success">
                                        <li className="page-item">
                                            <a className="page-link" href="#" data-abc="true">
                                                <i className="fa fa-angle-left">Previous</i>
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#" data-abc="true">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" data-abc="true">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" data-abc="true">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" data-abc="true">
                                                4
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" data-abc="true">
                                                <i className="fa fa-angle-right">Next</i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
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
                        Bạn có muốn xóa dịch vụ tên<span style={{color: "red"}}>{deleteFaciltys.name}</span> ?
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