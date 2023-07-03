import * as contractService from "../../../service/ContractService";
import * as facilityService from "../../../service/FacilityService";
import * as customerService from "../../../service/CustomerService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {TailSpin} from "react-loader-spinner";
import React, {useEffect, useState} from "react";
import * as Swal from "sweetalert2";

export function ContractCreate() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState([]);
    const [facility, setFacility] = useState([]);


    const getFacilityApi = async () => {
        const facility = await facilityService.findAll();
        setFacility(facility.data);
    }
    const getCustomerApi = async () => {
        const customer = await customerService.findAll();
        setCustomer(customer.data);
    }
    useEffect(() => {
        getCustomerApi();
        getFacilityApi();
    }, []);
    return (
        <>
            <Formik initialValues={{
                customerId: 0,
                facilityId: 0,
                startDayContract: '',
                endDayContract: '',
                deposits: ''
            }}
                    validationSchema={Yup.object({
                        customerId: Yup.number().moreThan(0, "Không được để trống"),
                        facilityId: Yup.number().moreThan(0, "Không được để trống"),
                        startDayContract: Yup.string().required("Không được để trống"),
                        endDayContract: Yup.string().required("Không được để trống"),
                        deposits: Yup.number().required("Không được để trống").moreThan(0,"Phải là số dương")
                    })}

                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false)
                        const createContract = async () => {
                            await contractService.save({
                                ...values,
                                deposits: +values.deposits,
                                customerId: +values.customerId,
                                facilityId: +values.facilityId
                            })
                            navigate("/contract/list");
                            Swal.fire({
                                icon: "success",
                                title: "Thêm mới hợp đồng thành công!!",
                                timer: "3000"
                            })
                        }
                        createContract()
                    }}
            >{
                ({isSubmitting}) => (
                    <div className="container" style={{marginTop: '25vh', marginBottom: '15vh'}}>
                        <div className="row d-flex justify-content-center">
                            <div className="col-xxl-5 border-form p-xxl-5">
                                <Form>
                                    <h1 className="text-center py-3">Tạo hợp đồng</h1>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-xxl-8">
                                            <div className="mt-3">
                                                <label className="form-label">Chọn khách hàng <span
                                                    style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                                <Field as="select" name="customerId" className="form-select text-center">
                                                    <option value={0}>--Chọn khách hàng--</option>
                                                    {
                                                        customer.map(c => (
                                                            <option key={c.id} value={c.id}>{c.name}</option>
                                                        ))
                                                    }
                                                </Field>
                                                <ErrorMessage component="span" style={{color: 'red'}}
                                                              name="customerId"/>
                                            </div>
                                            <div className="mt-3">
                                                <label className="form-label">Chọn dịch vụ <span
                                                    style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                                <Field as="select" name="facilityId" className="form-select  text-center">
                                                    <option value={0}>--Chọn dịch vụ--</option>
                                                    {
                                                        facility.map(f => (
                                                            <option key={f.id} value={f.id}>{f.name}</option>
                                                        ))
                                                    }
                                                </Field>
                                                <ErrorMessage component="span" style={{color: 'red'}}
                                                              name="facilityId"/>
                                            </div>
                                            <div className="mt-3">
                                                <label className="form-label">Ngày bắt đầu <span
                                                    style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                                <Field type="date" name="startDayContract" className="form-control text-center"/>
                                                <ErrorMessage component="span" style={{color: 'red'}}
                                                              name="startDayContract"/>
                                            </div>
                                            <div className="mt-3">
                                                <label className="form-label">Ngày kết thúc <span
                                                    style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                                <Field type="date" name="endDayContract" className="form-control text-center"/>
                                                <ErrorMessage component="span" style={{color: 'red'}}
                                                              name="endDayContract"/>
                                            </div>
                                            <div className="mt-3">
                                                <label className="form-label">Số tiền cọc trước <span
                                                    style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                                <Field type="text" name="deposits" className="form-control text-center"/>
                                                <ErrorMessage component="span" style={{color: 'red'}} name="deposits"/>
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
                                        </div>
                                    </div>
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