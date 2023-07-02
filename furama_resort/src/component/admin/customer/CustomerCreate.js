import * as customerService from "../../../service/CustomerService";

import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {TailSpin} from "react-loader-spinner";
import Swal from "sweetalert2";

export function CustomerCreate() {
    const [customerType, setCustomerType] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCustomerType = async () => {
            const resultCustomerType = await customerService.findCustomerType()
            setCustomerType(resultCustomerType.data)
        }
        fetchCustomerType();
    }, []);
    return (
        <>
            <Formik initialValues={{
                name: '',
                birthOfDay: '',
                gender: 0,
                citizenIdentification: '',
                phoneNumber: '',
                email: '',
                customerType: 0,
                address: ''
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Không được để trống"),
                        birthOfDay: Yup.string().required("Không được để trống"),
                        gender: Yup.number().moreThan(0, "Không được để trống"),
                        citizenIdentification: Yup.string().required("Không được để trống"),
                        phoneNumber: Yup.number().required("Không được để trống"),
                        email: Yup.string().required("Không được để trống"),
                        customerType: Yup.number().moreThan(0, "Không được để trống"),
                        address: Yup.string().required("Không được để trống")
                    })}

                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false)
                        const createCustomer = async () => {
                            await customerService.save({
                                ...values,
                                gender: +values.gender,
                                citizenIdentification: +values.citizenIdentification,
                                customerType: +values.customerType
                            })
                            navigate("/customer/list")
                            Swal.fire({
                                icon: "success",
                                title: "Thêm mới khách hàng thành công!!",
                                timer: "3000"
                            })
                        }
                        createCustomer()
                    }}
            >{
                ({isSubmitting}) => (
                    <div className="container" style={{marginTop: '25vh', marginBottom: '15vh'}}>
                        <div className="row d-flex justify-content-center">
                            <div className="col-xxl-5 boder-form p-5">
                                <Form>
                                    <h1 className="text-center py-5">Thêm mới khách hàng</h1>
                                    <div className="d-flex justify-content-around mt-3">
                                        <div className="col-xxl-5">
                                            <label className="form-label">Họ và tên <span
                                                style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                            <Field type="text" name="name" className="form-control"/>
                                            <ErrorMessage component="span" style={{color: 'red'}} name="name"/>
                                        </div>
                                        <div className="col-xxl-5">
                                            <label className="form-label">Ngày sinh <span
                                                style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                            <Field type="date" name="birthOfDay"
                                                   className="form-control"/>
                                            <ErrorMessage component="span" style={{color: 'red'}}
                                                          name="birthOfDay"/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around mt-3">
                                        <div className="col-xxl-5">
                                            <label className="form-label">Giới tính <span
                                                style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                            <Field as="select" name="gender"
                                                   className="form-select">
                                                <option value={"0"}>--Chọn giới tính--</option>
                                                <option value={"1"}>Nam</option>
                                                <option value={"2"}>Nữ</option>
                                            </Field>
                                            <ErrorMessage component="span" style={{color: 'red'}}
                                                          name="gender"/>
                                        </div>
                                        <div className="col-xxl-5" >
                                            <label className="form-label">Loại khách hàng <span
                                                style={{color: 'red', fontSize: 'large'}}>*</span> </label>
                                            <Field as="select"  name="customerType"
                                                   className="form-control">
                                                <option value={"0"}>--Chọn loại khách---</option>
                                                {customerType.map((type) => (
                                                    <option key={type.id} value={type.id}>{type.name}</option>
                                                ))}
                                            </Field>
                                            <ErrorMessage component="span" style={{color: 'red'}}
                                                          name="customerType"/>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-around mt-3">
                                        <div className="col-xxl-5">
                                            <label className="form-label">CMND <span
                                                style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                            <Field type="text"  name="citizenIdentification"
                                                   className="form-control"/>
                                            <ErrorMessage component="span" style={{color: 'red'}}
                                                          name="citizenIdentification"/>
                                        </div>
                                        <div className="col-xxl-5">
                                            <label className="form-label">Số điện thoại <span
                                                style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                            <Field type="text" name="phoneNumber"
                                                   className="form-control"/>
                                            <ErrorMessage component="span" style={{color: 'red'}} name="phoneNumber"/>
                                        </div>
                                    </div>
                                    <div className="mt-2 ms-3">
                                        <label className="form-label">Email <span
                                            style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                        <Field type="text" name="email" className="form-control" style={{width:'27.2vw'}}/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="email"/>
                                    </div>
                                    <div className="mt-2 ms-3">
                                        <label className="form-label">Địa chỉ <span
                                            style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                        <Field as="textarea" rows="3" style={{width:'27.2vw'}} name="address" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="address"/>
                                    </div>
                                    {
                                        isSubmitting ?
                                            <div className="d-flex justify-content-center mt-3">
                                                <TailSpin
                                                    height="40"
                                                    width="40"
                                                    color="#d5d5d5"
                                                    ariaLabel="tail-spin-loading"
                                                    radius="1"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                    visible={true}
                                                />
                                            </div> :
                                             <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-success mt-5 ">Thêm mới
                                                </button>
                                            </div>
                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                )
            }
            </Formik>
        </>
    )
}