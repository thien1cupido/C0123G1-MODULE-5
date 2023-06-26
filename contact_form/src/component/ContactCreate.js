import {ErrorMessage, Field, Form, Formik} from "formik";
import "bootstrap/dist/css/bootstrap.css"
import * as Yup from 'yup';
import {toast} from "react-toastify";
import {TailSpin} from "react-loader-spinner";

export function ContactCreate() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}
                validationSchema={Yup.object(
                    {
                        name: Yup.string().required("Can't be blank"),
                        email: Yup.string().required("Can't be blank").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
                        phone: Yup.string().required("Can't be blank"),
                        message: Yup.string().required("Can't be blank")
                    }
                )}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values)
                    setTimeout(() => {
                        setSubmitting(false)
                        toast("Add contact successfully!!!")
                    }, 1500)
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div className="container-fluid" >
                            <div className="row d-flex justify-content-center" style={{height:'100vh'}}>
                                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-center">
                                    <div className="row p-5" style={{border:"1px solid #b5a7a7"}}>
                                        <h1 className="text-center">Contact form</h1>
                                        <Form>
                                            <div>
                                                <label className="form-label" htmlFor="name">Name</label>
                                                <Field className="form-control" type="text" id="name" name="name"/>
                                                <ErrorMessage name="name" component="span" style={{color:"red"}} />
                                            </div>
                                            <div className="mt-3">
                                                <label className="form-label" htmlFor="email">Email</label>
                                                <Field className="form-control" type="text" id="email" name="email"/>
                                                <ErrorMessage name="email" component="span" style={{color:"red"}} />
                                            </div>
                                            <div className="mt-3">
                                                <label className="form-label" htmlFor="phone">Phone</label>
                                                <Field className="form-control" type="text" id="phone" name="phone"/>
                                                <ErrorMessage name="phone" component="span" style={{color:"red"}} />
                                            </div>
                                            <div className="mt-3">
                                                <label className="form-label" htmlFor="message">Message</label>
                                                <Field className="form-control"  type="text" id="message" as="textarea" rows="3"
                                                       name="message"></Field>
                                                <ErrorMessage name="message" component="span" style={{color:"red"}} />
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
                                                    <div className="d-flex justify-content-center">
                                                        <button className="mt-3 btn btn-success" type="submit">Submit</button>
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
        </>

    )
}