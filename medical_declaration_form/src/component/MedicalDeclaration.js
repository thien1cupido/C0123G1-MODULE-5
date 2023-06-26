import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';

export function MedicalDeclaration() {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                message: ''
            }}
            validationSchema={Yup.object(
                {}
            )}
            onSubmit={(values, {setSubmitting}) => {
                console.log(values)
                setTimeout(() => {
                    setSubmitting(false)
                    // toast("Add contact successfully!!!")
                }, 1500)
            }}
        >
            {(isSubmitting) => (
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center" style={{height: '100vh'}}>
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-center">
                            <div className="row p-5" style={{border: "1px solid #b5a7a7"}}>
                                <h1 className="text-center">Tờ khai y tế</h1>
                                <Form>
                                    <div>
                                        <label className="form-label" htmlFor="name">Họ tên</label>
                                        <Field className="form-control" type="text" id="name" name="name"/>
                                        <ErrorMessage name="name" component="span" style={{color: "red"}}/>
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label" htmlFor="email">Số hộ chiếu /CMND</label>
                                        <Field className="form-control" type="text" id="email" name="email"/>
                                        <ErrorMessage name="email" component="span" style={{color: "red"}}/>
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label" htmlFor="email">Năm sinh</label>
                                        <Field className="form-control" type="text" id="email" name="email"/>
                                        <ErrorMessage name="email" component="span" style={{color: "red"}}/>
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label">Giới tính</label>
                                        <Field className="ra" type="text" as="radio" name="gender" value="0"/>
                                        <label className="form-label">Nam</label>
                                        <Field className="form-control" type="text" as="radio" name="gender" value="1"/>
                                        <label className="form-label">Nữ</label>
                                        <ErrorMessage name="phone" component="span" style={{color: "red"}}/>
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label" htmlFor="message">Giới tính</label>
                                        <Field className="form-control" type="text" id="message" as="textarea" rows="3"
                                               name="message"></Field>
                                        <ErrorMessage name="message" component="span" style={{color: "red"}}/>
                                    </div>
                                    {
                                        isSubmitting ? "loading" :
                                            <div className="d-flex justify-content-center">
                                                <button className="mt-3 btn btn-success" type="submit">Submit</button>
                                            </div>
                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}
