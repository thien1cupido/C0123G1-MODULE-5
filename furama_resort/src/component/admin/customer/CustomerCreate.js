import * as customerService from "../../../service/CustomerService";

import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {TailSpin} from "react-loader-spinner";

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
                gender: '',
                citizenIdentification: '',
                phoneNumber: '',
                email: '',
                customerType: '',
                address: ''
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Không được để trống"),
                        birthOfDay: Yup.string().required("Không được để trống"),
                        gender: Yup.string().required("Không được để trống"),
                        citizenIdentification: Yup.string().required("Không được để trống"),
                        phoneNumber: Yup.string().required("Không được để trống"),
                        email: Yup.string().required("Không được để trống"),
                        customerType: Yup.string(),
                        address: Yup.string().required("Không được để trống")
                    })}

                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false)
                        const createCustomer = async () => {
                            await customerService.save(values)
                            navigate("/customer/list")
                            toast(`Thêm mới thành công khách hàng !!`)
                        }
                        createCustomer()
                    }}
            >{
                ({isSubmitting}) => (
                    <div className="container">
                        <div style={{height:'15vh'}}></div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-xxl-5">
                                <Form>
                                    <h1 className="text-center">Thêm mới khách hàng</h1>
                                    <div className="mt-3">
                                        <label className="form-label">Họ và tên <span
                                            style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                        <Field type="text" name="name" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="name"/>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <label className="form-label">Ngày sinh <span
                                                style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                            <Field  type="date" name="birthOfDay"  style={{width:'10vw'}}
                                                   className="form-control"/>
                                            <ErrorMessage component="span" style={{color: 'red'}}
                                                          name="birthOfDay"/>
                                        </div>
                                        <div>
                                            <label className="form-label">Giới tính <span
                                                style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                            <Field as="select"  name="gender" style={{width:'11vw'}}
                                                   className="form-control">
                                                <option value={0}>Nam</option>
                                                <option value={1}>Nữ</option>
                                            </Field>
                                        </div>

                                        <div>
                                            <label className="form-label">Loại khách hàng <span
                                                style={{color: 'red', fontSize: 'large'}}>*</span> </label>
                                            <Field as="select" style={{width: '11vw'}} name="customerType"
                                                   className="form-control">
                                                {customerType.map((type) => (
                                                    <option key={type.id} value={type.id}>{type.name}</option>
                                                ))}
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <label className="form-label">CMND <span
                                                style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                            <Field type="text" style={{width: '16vw'}} name="citizenIdentification"
                                                   className="form-control"/>
                                            <ErrorMessage component="span" style={{color: 'red'}}
                                                          name="citizenIdentification"/>
                                        </div>
                                        <div>
                                            <label className="form-label">Số điện thoại <span
                                                style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                            <Field type="text" style={{width: '16vw'}} name="phoneNumber"
                                                   className="form-control"/>
                                            <ErrorMessage component="span" style={{color: 'red'}} name="phoneNumber"/>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <label className="form-label">Email <span
                                            style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                        <Field type="text" name="email" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="email"/>
                                    </div>
                                    <div className="mt-2">
                                        <label className="form-label">Địa chỉ <span
                                            style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                        <Field as="textarea" rows="3" name="address" className="form-control"/>
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
                                                <button type="submit" className="btn btn-success mt-5 ">Thêm mới</button>
                                            </div>
                                    }
                                </Form>
                            </div>
                        </div>
                        <div style={{height:'15vh'}}></div>
                    </div>
                )
            }
            </Formik>
        </>
    )
}