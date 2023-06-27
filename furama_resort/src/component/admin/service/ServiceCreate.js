import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {TailSpin} from "react-loader-spinner";
import {toast} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.css'

export function ServiceCreate() {
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
                    usableArea: Yup.number("Vui lòng nhập số").required("Không được để trống"),
                    rentalCosts: Yup.string().required("Không được để trống"),
                    maximumCapacity: Yup.number("Vui lòng nhập số").required("Không được để trống"),
                    rentalType: Yup.string().required("Không được để trống")
                })}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values)
                    setTimeout(() => {
                        setSubmitting(false)
                        toast(`Thêm dịch vụ ${values.ServiceName} thành công!`)
                    }, 1000)
                }}
        >
            {
                ({isSubmitting}) => (
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xxl-4">
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
                                                </div>
                                                :
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