import {ErrorMessage, Field, Form, Formik} from "formik";
import {TailSpin} from "react-loader-spinner";
import * as bookService from "../service/BookService";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";

export function BookCreate() {
    const navigate = useNavigate()
    return (
        <>
            <Formik initialValues={{
                title: '',
                quantity: ''
            }}
                    validationSchema={Yup.object({
                        title: Yup.string().required("Can't be blank"),
                        quantity: Yup.string().required("Can't be blank")
                    })}

                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false)
                        const create = async () => {
                            await bookService.save(values)
                            navigate("/")
                            toast("Add tittle successfully!!")
                        }
                        create()
                    }}
            >{
                ({isSubmitting}) => (
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xxl-4">
                                <Form>
                                    <h1>Add a new book</h1>
                                    <div>
                                        <label className="form-label">Title</label>
                                        <Field type="text" name="title" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="title"/>
                                    </div>
                                    <div>
                                        <label className="form-label">Quantity</label>
                                        <Field type="text" name="quantity" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="quantity"/>
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
                                            <button className="btn btn-success mt-3">Create</button>
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