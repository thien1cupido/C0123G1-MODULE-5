import {ErrorMessage, Field, Form, Formik} from "formik";

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
                                        <h1>Chỉnh sửa dịch vụ</h1>
                                    </div>
                                    <Form>
                                        <div className="mt-3">
                                            <label className="form-label">Tên dịch vụ</label>
                                            <Field className="form-control" type="text"
                                                   name="serviceName"/>
                                            <ErrorMessage name="serviceName" componet='span' style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Diện tích sử dụng</label>
                                            <Field className="form-control" type="text" name="usableArea"/>
                                            <ErrorMessage name="usableArea" componet='span' style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Chi phí thuê</label>
                                            <Field className="form-control" type="text" name="rentalCosts"/>
                                            <ErrorMessage name="rentalCosts" componet='span' style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Số lượng người tối đa</label>
                                            <Field className="form-control" type="text" name="maximumCapacity"/>
                                            <ErrorMessage name="maximumCapacity" componet='span'
                                                          style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Kiểu thuê</label>
                                            <Field className="form-control" type="text" name="rentalType"/>
                                            <ErrorMessage name="rentalType" componet='span' style={{color: 'red'}}/>
                                        </div>
                                        {
                                            isSubmitting ? "Loading" :
                                                <div className="mt-3">
                                                    <div className="d-flex justify-content-center mt-5">
                                                        <button type="submit" className="btn-primary">Sửa</button>
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