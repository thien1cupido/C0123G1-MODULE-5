import * as customerService from "../../../service/CustomerService";

import {ErrorMessage, Field, Form, Formik} from "formik";
import {format} from 'date-fns';
import * as Yup from "yup";
import {toast} from "react-toastify";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {TailSpin} from "react-loader-spinner";

export function CustomerUpdate() {
    const [customer, setCustomer] = useState(null);
    const [customerType, setCustomerType] = useState([]);
    const navigate = useNavigate();
    const param = useParams();
    useEffect(() => {
        const fetchCustomerType = async () => {
            const resultCustomerType = await customerService.findCustomerType()
            setCustomerType(resultCustomerType.data)
        }
        fetchCustomerType();
    }, [])
    useEffect(() => {
        const fetchCustomer = async () => {
            const result = await customerService.findCustomerById(param.id)
            setCustomer(result.data)

        }
        fetchCustomer();
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'yyyy-MM-dd');
    };
    if (!customer) {
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                id: customer?.id,
                name: customer?.name,
                birthOfDay: formatDate(customer?.birthOfDay),
                gender: customer?.gender,
                citizenIdentification: customer?.citizenIdentification,
                phoneNumber: customer?.phoneNumber,
                email: customer?.email,
                customerType: customer?.customerType,
                address: customer?.address
            }}
                    validationSchema={Yup.object({
                        id: Yup.number().required("Không được để trống"),
                        name: Yup.string().required("Không được để trống"),
                        birthOfDay: Yup.string().required("Không được để trống"),
                        gender: Yup.number().min(1).required("Không được để trống"),
                        citizenIdentification: Yup.string().required("Không được để trống"),
                        phoneNumber: Yup.string().required("Không được để trống"),
                        email: Yup.string().required("Không được để trống"),
                        customerType: Yup.number().min(1),
                        address: Yup.string().required("Không được để trống")
                    })}

                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false)
                        const updateCustomer = async () => {
                            await customerService.updateCustomer(
                                {
                                    ...values,
                                    id: +values.id,
                                    gender: +values.gender,
                                    customerType: +customerType
                                })
                            navigate("/customer/list")
                            toast(`Sửa thành công khách hàng ${customer.name} !!`)
                        }
                        updateCustomer()
                    }}
            >{
                ({isSubmitting}) => (
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xxl-4">
                                <Form>
                                    <h1>Sửa thông tin khách hàng</h1>
                                    <div className="mt-3">
                                        <label className="form-label">Họ và tên <span style={{
                                            color: 'red',
                                            fontSize: 'large'
                                        }}>*</span></label>
                                        <Field type="text" name="name" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="name"/>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <label className="form-label">Ngày sinh <span style={{
                                                color: 'red',
                                                fontSize: 'large'
                                            }}>*</span></label>
                                            <Field style={{width: '9vw'}} type="date" name="birthOfDay"
                                                   className="form-control"/>
                                        </div>
                                        <div>
                                            <label className="form-label">Giới tính <span style={{
                                                color: 'red',
                                                fontSize: 'large'
                                            }}>*</span></label>
                                            <Field as="select" style={{width: '9vw'}} name="gender"
                                                   className="form-control">
                                                <option value="0">Nam</option>
                                                <option value="1">Nữ</option>
                                            </Field>
                                        </div>

                                        <div>
                                            <label className="form-label">Loại khách hàng <span style={{
                                                color: 'red',
                                                fontSize: 'large'
                                            }}>*</span> </label>
                                            <Field as="select" style={{width: '10vw'}} name="customerType"
                                                   className="form-control">
                                                {customerType.map((type) => (
                                                    <option key={type.id} value={type.name}>{type.name}</option>
                                                ))}
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <label className="form-label">CMND <span style={{
                                                color: 'red',
                                                fontSize: 'large'
                                            }}>*</span></label>
                                            <Field type="text" style={{width: '15vw'}} name="citizenIdentification"
                                                   className="form-control"/>
                                            <ErrorMessage component="span" style={{color: 'red'}}
                                                          name="citizenIdentification"/>
                                        </div>
                                        <div>
                                            <label className="form-label">Số điện thoại <span style={{
                                                color: 'red',
                                                fontSize: 'large'
                                            }}>*</span></label>
                                            <Field type="text" style={{width: '15vw'}} name="phoneNumber"
                                                   className="form-control"/>
                                            <ErrorMessage component="span" style={{color: 'red'}} name="phoneNumber"/>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <label className="form-label">Email <span style={{
                                            color: 'red',
                                            fontSize: 'large'
                                        }}>*</span></label>
                                        <Field type="text" name="email" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="email"/>
                                    </div>
                                    <div className="mt-2">
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
                                                <button type="submit" className="btn btn-success mt-3">Sửa</button>
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