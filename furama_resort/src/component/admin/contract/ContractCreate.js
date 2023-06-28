import * as contractService from "../../../service/ContractService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {TailSpin} from "react-loader-spinner";

export function ContractCreate() {
    const navigate=useNavigate()
    return (
        <>
            <Formik initialValues={{
                customer: '',
                facility: '',
                startDayContract: '',
                endDayContract: '',
                deposits: ''
            }}
                    validationSchema={Yup.object({
                        startDayContract: Yup.string().required("Không được để trống"),
                        endDayContract: Yup.string().required("Không được để trống"),
                        deposits: Yup.string().required("Không được để trống")
                    })}

                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false)
                        const createContract = async () => {
                            await contractService.save(values)
                            navigate("/contract/list")
                            toast(`Tạo hợp đồng thành công !!`)
                        }
                        createContract()
                    }}
            >{
                ({isSubmitting}) => (
                    <div className="container">
                        <div style={{height: '15vh'}}></div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-xxl-3">
                                <Form>
                                    <h1 className="text-center">Tạo hợp đồng</h1>
                                    <div className="mt-3">
                                        <label className="form-label">Ngày bắt đầu <span
                                            style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                        <Field type="date" name="startDayContract" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="startDayContract"/>
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label">Ngày kết thúc <span
                                            style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                        <Field type="date" name="endDayContract" className="form-control"/>
                                        <ErrorMessage component="span" style={{color: 'red'}} name="endDayContract"/>
                                    </div>
                                    <div className="mt-3">
                                        <label className="form-label">Số tiền cọc trước <span
                                            style={{color: 'red', fontSize: 'large'}}>*</span></label>
                                        <Field type="text" name="deposits" className="form-control"/>
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
                                </Form>
                            </div>
                        </div>
                        <div style={{height: '15vh'}}></div>
                    </div>
                )
            }
            </Formik>
        </>
    )
}