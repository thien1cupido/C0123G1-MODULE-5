import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import * as facilityService from "../../../service/FacilityService";
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

export function FacilityCreate() {
    const navigate = useNavigate();

    const [facilityType, setFacilityType] = useState([]);
    const [rentalTypeStatus, setRentalTypeStatus] = useState(1);

    useEffect(() => {
        const getFacilityTypeApi = async () => {
            const facilityType = await facilityService.findAllFacilityType();
            setFacilityType(facilityType.data);
        }
        getFacilityTypeApi()
    }, [])

    return (
        <Formik initialValues={{
            name: '',
            usableArea: '',
            rentalCosts: '',
            maximumNumber: '',
            facilityType: '',
            image: '',
            rentalType: '',
            roomStandard: '',
            poolArea: '',
            description: '',
            numberFloor: '',
            accessory: ''
        }}
            validationSchema={Yup.object({
                name: Yup.string().required("Không được để trống"),
                usableArea: Yup.number("Vui lòng nhập số").required("Không được để trống"),
                rentalCosts: Yup.number().required("Không được để trống"),
                maximumNumber: Yup.number("Vui lòng nhập số").required("Không được để trống"),
                image: Yup.string(),
                roomStandard: Yup.number().required("Không được để trống"),
                description: Yup.string(),
                numberFloor: Yup.number().required("Không được để trống")
            })}
                onSubmit={values => {
                    const create = async () => {
                        await facilityService.save({
                            ...values,
                            usableArea: +values.usableArea,
                            rentalCosts: +values.rentalCosts,
                            maximumNumber: +values.maximumCapacity,
                            roomStandard: +values.roomStandard,
                            numberFloor: +values.numberFloor
                        })
                        navigate("/facility/list");
                        toast(`Thêm dịch vụ ${values.ServiceName} thành công!`);
                    }
                    create();
                }}
        >
            <div className="container-fluid" style={{marginTop: '15vh',marginBottom:'15vh'}}>
                <div className="row d-flex justify-content-center">
                    <div className="col-xxl-5">
                        <div>
                            <div className="my-4 d-flex justify-content-center">
                                <h1 className="py-5">Thêm mới dịch vụ</h1>
                            </div>
                            <Form>
                                <div className="mt-3">
                                    <label className="form-label">Loại dịch vụ</label>
                                    <Field className="form-control" as="select" name="facilityType"
                                           onClick={(event) => setRentalTypeStatus(event.target.value)}>
                                        {
                                            facilityType.map(ft => (
                                                <option key={ft.id} value={ft.id}>{ft.name}</option>
                                            ))
                                        }
                                    </Field>
                                </div>
                                <div className="mt-3">
                                    <label className="form-label" htmlFor="name">Tên dịch vụ</label>
                                    <Field className="form-control" type="text" id="name"
                                           name="name"/>
                                    <ErrorMessage name="name" component="span"
                                                  style={{color: 'red'}}/>
                                </div>
                                <div className="mt-3">
                                    <label className="form-label" htmlFor="usableArea">Diện tích sử dụng</label>
                                    <Field className="form-control" type="number" name="usableArea"
                                           id="usableArea"/>
                                    <ErrorMessage name="usableArea" component='span'
                                                  style={{color: 'red'}}/>
                                </div>
                                <div className="mt-3">
                                    <label className="form-label" htmlFor="rentalCosts">Chi phí thuê</label>
                                    <Field className="form-control" type="number" name="rentalCosts"
                                           id="rentalCosts"/>
                                    <ErrorMessage name="rentalCosts" component="span"
                                                  style={{color: 'red'}}/>
                                </div>
                                <div className="mt-3">
                                    <label className="form-label" htmlFor="maximumNumber">Số lượng người tối
                                        đa</label>
                                    <Field className="form-control" type="number" name="maximumCapacity"
                                           id="maximumNumber"/>
                                    <ErrorMessage name="maximumNumber" component="span"
                                                  style={{color: 'red'}}/>
                                </div>
                                <div className="mt-3">
                                    <label className="form-label" htmlFor="image">Ảnh</label>
                                    <Field className="form-control" type="text" name="image" id="image"/>
                                    <ErrorMessage name="image" component='span'
                                                  style={{color: 'red'}}/>
                                </div>
                                {

                                    rentalTypeStatus === 3 ? <div className="mt-3">
                                            <label className="form-label" htmlFor="accessory">Dịch vụ miễn phí đi
                                                kèm</label>
                                            <Field className="form-control" type="text" name="accessory"
                                                   id="accessory"/>
                                            <ErrorMessage name="accessory" component='span'
                                                          style={{color: 'red'}}/>
                                        </div>
                                        : ''
                                }
                                {
                                    rentalTypeStatus === 2 || rentalTypeStatus === 1 ?
                                        <>
                                            <div className="mt-3">
                                                <label className="form-label" htmlFor="roomStandard">Tiêu chuẩn
                                                    phòng</label>
                                                <Field className="form-control" type="text" name="roomStandard"
                                                       id="roomStandard"/>
                                                <ErrorMessage name="roomStandard" component='span'
                                                              style={{color: 'red'}}/>
                                            </div>
                                            <div className="mt-3">
                                                <label className="form-label" htmlFor="description">Mô tả tiện nghi
                                                    khác</label>
                                                <Field className="form-control" type="text" name="description"
                                                       id="description"/>
                                                <ErrorMessage name="description" component='span'
                                                              style={{color: 'red'}}/>
                                            </div>
                                            <div className="mt-3">
                                                <label className="form-label" htmlFor="numberFloor">Số tầng</label>
                                                <Field className="form-control" type="text" name="roomStandard"
                                                       id="roomStandard"/>
                                                <ErrorMessage name="numberFloor" component='span'
                                                              style={{color: 'red'}}/>
                                            </div>
                                        </> : ''
                                }
                                {
                                    rentalTypeStatus === 1 ?
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="poolArea">Diện tích hồ
                                                bơi</label>
                                            <Field className="form-control" type="text" name="poolArea"
                                                   id="poolArea"/>
                                            <ErrorMessage name="poolArea" component='span'
                                                          style={{color: 'red'}}/>
                                        </div>
                                        : ''
                                }
                                <div className="mt-3">
                                    <div className="d-flex justify-content-center mt-5">
                                        <button type="submit" className="btn btn-success">Thêm mới
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Formik>
    )
}