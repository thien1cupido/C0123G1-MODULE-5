import {ErrorMessage, Field, Form, Formik} from "formik";
import *  as Yup from 'yup'

export function ServiceUpdate() {
    return (
        <Formik initialValues={{
            ServiceName: '',
            usableArea: '',
            rentalCosts: '',
            rentalCost: '',
            maximumCapacity: '',
            rentalType: ''

        }}
                validationSchema={Yup.object({
                    ServiceName: Yup.string().required("Không được để trống"),
                    usableArea: Yup.number("Vui lòng nhập số").
                    required("Không được để trống"),
                    rentalCosts: Yup.number().required("Không được để trống"),
                    maximumCapacity: Yup.number("Vui lòng nhập số").required("Không được để trống"),
                    rentalType: Yup.string().required("Không được để trống")
                })}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values)
                    setTimeout(() => {
                        setSubmitting(false)
                    }, 1000)
                }}
        >
            {
                ({isSubmitting}) => (
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <div>
                                    <div className="my-4 d-flex justify-content-center">
                                        <h1>Thêm mới dịch vụ</h1>
                                    </div>
                                    <Form>
                                        <div className="mt-3">
                                            <label className="form-label">Tên dịch vụ</label>
                                            <Field className="form-control" type="text"
                                                   name="ServiceName"/>
                                            <ErrorMessage name="ServiceName" component="span" style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Diện tích sử dụng</label>
                                            <Field className="form-control" type="text" name="usableArea"/>
                                            <ErrorMessage name="usableArea" component='span' style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Chi phí thuê</label>
                                            <Field className="form-control" type="text" name="rentalCosts"/>
                                            <ErrorMessage name="rentalCosts" component="span" style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Số lượng người tối đa</label>
                                            <Field className="form-control" type="text" name="maximumCapacity"/>
                                            <ErrorMessage name="maximumCapacity" component="span"
                                                          style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Kiểu thuê</label>
                                            <Field className="form-control" type="text" name="rentalType"/>
                                            <ErrorMessage name="rentalType" component='span' style={{color: 'red'}}/>
                                        </div>
                                        {
                                            isSubmitting ? "Loading" :
                                                <div className="mt-3">
                                                    <div className="d-flex justify-content-center mt-5">
                                                        <button type="submit" className="btn btn-success">Thêm mới
                                                        </button>
                                                    </div>
                                                </div>
                                        }
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Formik>

    )
}