import * as bookService from "../../../service/CustomerService";

import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {TailSpin} from "react-loader-spinner";

export function CustomerUpdate() {
    const [customer, setCustomer] = useState(null);
    const navigate = useNavigate();
    const param = useParams();
    if (!customer) {
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                id: customer.id,
                name: customer.name,
                birthOfDay: customer.birthOfDay,
                gender: customer.gender,
                citizenIdentification: customer.citizenIdentification,
                phoneNumber: customer.phoneNumber,
                email: customer.email,
                customerType: customer.customerType,
                address: customer.address
            }}
                    validationSchema={Yup.object({
                        id: Yup.string().required("Không được để trống"),
                        name: Yup.string().required("Không được để trống"),
                        birthOfDay: Yup.string().required("Không được để trống"),
                        gender: Yup.string().required("Không được để trống"),
                        citizenIdentification: Yup.string().required("Không được để trống"),
                        phoneNumber: Yup.string().required("Không được để trống"),
                        email: Yup.string().required("Không được để trống"),
                        customerType: Yup.string().required("Không được để trống"),
                        address: Yup.string().required("Không được để trống")
                    })}

                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false)
                        const create = async () => {
                            await bookService.updateCustomer(values)
                            navigate("/customer/list")
                            toast(`Sửa thành công khách hàng ${customer.name} !!`)
                        }
                        create()
                    }}
            >{
                ({isSubmitting}) => (
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xxl-4">
                                <Form>
                                    <h1>Sửa thông tin khách hàng</h1>
                                    <div>
                                        <label className="form-label">Họ và tên</label>
                                        <Field type="text" name="name" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="name"/>
                                    </div>
                                    <div>
                                        <label className="form-label">Ngày sinh</label>
                                        <Field type="text" name="birthOfDay" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="birthOfDay"/>
                                    </div>
                                    <div>
                                        <label className="form-label">Giới tính</label>
                                        <Field type="text" name="gender" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="gender"/>
                                    </div>
                                    <div>
                                        <label className="form-label">CMND</label>
                                        <Field type="text" name="citizenIdentification" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="citizenIdentification"/>
                                    </div>
                                    <div>
                                        <label className="form-label">Số điện thoại</label>
                                        <Field type="text" name="phoneNumber" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="phoneNumber"/>
                                    </div>
                                    <div>
                                        <label className="form-label">Email</label>
                                        <Field type="text" name="email" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="email"/>
                                    </div>
                                    <div>
                                        <label className="form-label">Loại khách hàng</label>
                                        <Field type="text" name="quantity" className="form-control"/>
                                        <ErrorMessage component="customerType" style={{color: 'red'}} name="customerType"/>
                                    </div>
                                    <div>
                                        <label className="form-label">Địa chỉ</label>
                                        <Field type="text" name="address" className="form-control"/>
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
                                            <button className="btn btn-success mt-3">Sửa</button>
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