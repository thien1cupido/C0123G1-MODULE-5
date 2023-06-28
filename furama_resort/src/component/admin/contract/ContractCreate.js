import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as customerService from "../../../service/CustomerService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {TailSpin} from "react-loader-spinner";

function ContractCreate() {
    const [contract, setContract] = useState([]);
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
                            toast(`Tạo hợp đồng thành công !!`)
                        }
                        createCustomer()
                    }}
            >{
                ({isSubmitting}) => (
                    <div className="container">
                        <div style={{height: '15vh'}}></div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-xxl-5">
                                <Form>
                                    <h1 className="text-center">Tạo hợp đồng</h1>
                                    <div className="mt-3">
                                        <label className="form-label">Số hợp đồng <span
                                            style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                        <Field type="text" name="name" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="name"/>
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label">Ngày bắt đầu <span
                                            style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                        <Field type="text" name="name" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="name"/>
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label">Số tiền cọc trước <span
                                            style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                        <Field type="text" name="name" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="name"/>
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
                        <div style={{height: '15vh'}}></div>
                    </div>
                )
            }
            </Formik>
        </>
    )
}