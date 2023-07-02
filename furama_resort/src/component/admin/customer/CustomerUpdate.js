import * as customerService from "../../../service/CustomerService";

import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {TailSpin} from "react-loader-spinner";
import Swal from "sweetalert2";

export function CustomerUpdate() {
    const [customers, setCustomer] = useState(null);
    const [customerType, setCustomerType] = useState([]);
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        const fetchCustomer = async () => {
            const result = await customerService.findCustomerById(param.id)
            setCustomer(result.data)
        }
        const fetchCustomerType = async () => {
            const resultCustomerType = await customerService.findCustomerType()
            setCustomerType(resultCustomerType.data)
        }
        fetchCustomerType();
        fetchCustomer();
    }, [param.id]);

    if (!customers){
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                address: customers?.address,
                birthOfDay: customers?.birthOfDay,
                id: customers?.id,
                name: customers?.name,
                gender: customers?.gender,
                citizenIdentification: customers?.citizenIdentification,
                phoneNumber: customers?.phoneNumber,
                email: customers?.email,
                customerType: customers?.customerType
            }}
                    validationSchema={Yup.object({
                        id: Yup.number().required(),
                        name: Yup.string().required("Không được để trống"),
                        birthOfDay: Yup.string().required("Không được để trống"),
                        gender: Yup.number().moreThan(0, "Không được để trống"),
                        citizenIdentification: Yup.string().required("Không được để trống"),
                        phoneNumber: Yup.string().required("Không được để trống"),
                        email: Yup.string().required("Không được để trống"),
                        customerType: Yup.number().moreThan(0, "Không được để trống"),
                        address: Yup.string().required("Không được để trống")
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false)
                        console.log(values)
                        const updateCustomer = async () => {
                            await customerService.updateCustomer(
                                {
                                    ...values,
                                    id: +values.id,
                                    gender: +values.gender,
                                    customerType: +values.customerType
                                })
                            navigate("/customer/list")
                            Swal.fire({
                                icon: "success",
                                title: `Sửa thành công khách hàng <span style='color: red'>${customers.name}</span>!!`,
                                timer: "3000"
                            })
                        }
                        updateCustomer()
                    }}
            >{
                ({isSubmitting}) => (
                    <div className="container" style={{marginTop: '25vh', marginBottom: '15vh'}}>
                        <div className="row d-flex justify-content-center">
                            <div className="col-xxl-5 col-xl-5">
                                <Form>
                                    <h1 className="py-5 text-center">Sửa thông tin khách hàng</h1>
                                    <div className="mt-3">
                                        <label className="form-label">Họ và tên <span style={{
                                            color: 'red',
                                            fontSize: 'large'
                                        }}>*</span></label>
                                        <Field hidden name="id" className="form-control"/>
                                        <Field type="text" name="name" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="name"/>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <div>
                                            <label className="form-label">Ngày sinh <span style={{
                                                color: 'red',
                                                fontSize: 'large'
                                            }}>*</span></label>
                                            <Field style={{width: '10vw'}} type="date" name="birthOfDay"
                                                   className="form-control"/>
                                        </div>
                                        <div>
                                            <label className="form-label">Giới tính <span style={{
                                                color: 'red',
                                                fontSize: 'large'
                                            }}>*</span></label>

                                            <Field as="select" style={{width: '10vw'}} name="gender"
                                                   className="form-control">
                                                <option value={0}>--Chọn giới tính</option>
                                                <option value={1}>Nam</option>
                                                <option value={2}>Nữ</option>
                                            </Field>
                                            <ErrorMessage component="span" style={{color: 'red'}} name="gender"/>
                                        </div>
                                        <div>
                                            <label className="form-label">Loại khách hàng <span style={{
                                                color: 'red',
                                                fontSize: 'large'
                                            }}>*</span> </label>
                                            <Field as="select" style={{width: '10vw'}} name="customerType"
                                                   className="form-control">
                                                <option value={0}>--Chọn loại khách--</option>
                                                {
                                                    customerType.map((type) => (
                                                        <option key={type.id} value={type.id}>{type.name}</option>
                                                    ))}
                                            </Field>
                                            <ErrorMessage component="span" style={{color: 'red'}} name="customerType"/>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between mt-3">
                                        <div>
                                            <label className="form-label">CMND <span style={{
                                                color: 'red',
                                                fontSize: 'large'
                                            }}>*</span></label>
                                            <Field type="text" style={{width: '16vw'}} name="citizenIdentification"
                                                   className="form-control"/>
                                            <ErrorMessage component="span" style={{color: 'red'}}
                                                          name="citizenIdentification"/>
                                        </div>
                                        <div>
                                            <label className="form-label">Số điện thoại <span style={{
                                                color: 'red',
                                                fontSize: 'large'
                                            }}>*</span></label>
                                            <Field type="text" style={{width: '16vw'}} name="phoneNumber"
                                                   className="form-control"/>
                                            <ErrorMessage component="span" style={{color: 'red'}} name="phoneNumber"/>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label">Email <span style={{
                                            color: 'red',
                                            fontSize: 'large'
                                        }}>*</span></label>
                                        <Field type="text" name="email" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="email"/>
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label">Địa chỉ <span style={{
                                            color: 'red',
                                            fontSize: 'large'
                                        }}>*</span></label>
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
                                                <button type="submit" className="btn btn-success mt-5">Sửa</button>
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