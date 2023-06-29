import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {TailSpin} from "react-loader-spinner";
import {toast} from "react-toastify";
import * as facilityService from "../../../service/FacilityService";
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from "react-router-dom";

export function FacilityCreate() {
    const navigate = useNavigate();
    return (
        <Formik initialValues={{
            name: '',
            usableArea: '',
            rentalCosts: '',
            maximumNumber: '',
            image: '',
            rentalType: '',
            roomStandard: '',
            description: '',
            numberFloor: ''

        }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Không được để trống"),
                    usableArea: Yup.number("Vui lòng nhập số").required("Không được để trống"),
                    rentalCosts: Yup.number().required("Không được để trống"),
                    maximumNumber: Yup.number("Vui lòng nhập số").required("Không được để trống"),
                    image: Yup.string(),
                    rentalType: Yup.number().required("Không được để trống"),
                    roomStandard: Yup.number().required("Không được để trống"),
                    description: Yup.string(),
                    numberFloor: Yup.number().required("Không được để trống")

                })}
                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(false);
                    const create = async () => {
                        await facilityService.save({
                            ...values,
                            usableArea: +usableArea,
                            rentalCosts: +rentalCosts,
                            maximumNumber: +maximumCapacity,
                            rentalType: +rentalType,
                            roomStandard: +roomStandard,
                            numberFloor: +numberFloor
                        })
                        navigate("/facility/list");
                        toast(`Thêm dịch vụ ${values.ServiceName} thành công!`);
                    }
                    create();
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
                                            <label className="form-label" htmlFor="name">Tên dịch vụ</label>
                                            <Field className="form-control" type="text" id="name"
                                                   name="name"/>
                                            <ErrorMessage name="name" component="span"
                                                          style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="usableArea">Diện tích sử dụng</label>
                                            <Field className="form-control" type="text" name="usableArea" id="usableArea"/>
                                            <ErrorMessage name="usableArea" component='span'
                                                          style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="rentalCosts">Chi phí thuê</label>
                                            <Field className="form-control" type="text" name="rentalCosts" id="rentalCosts"/>
                                            <ErrorMessage name="rentalCosts" component="span"
                                                          style={{color: 'red'}}/>
                                        </div>
                                        name: '',
                                        usableArea: '',
                                        rentalCosts: '',
                                        maximumNumber: '',
                                        image: '',
                                        rentalType: '',
                                        roomStandard: '',
                                        description: '',
                                        numberFloor: ''
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="maximumNumber">Số lượng người tối đa</label>
                                            <Field className="form-control" type="text" name="maximumCapacity" id="maximumNumber"/>
                                            <ErrorMessage name="maximumNumber" component="span"
                                                          style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="image">Ảnh</label>
                                            <Field className="form-control" type="text" name="image" id="image"/>
                                            <ErrorMessage name="image" component='span'
                                                          style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Kiểu thuê</label>
                                            <Field className="form-control" type="text" name="rentalType"/>
                                            <ErrorMessage name="rentalType" component='span'
                                                          style={{color: 'red'}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">Kiểu thuê</label>
                                            <Field className="form-control" type="text" name="rentalType"/>
                                            <ErrorMessage name="rentalType" component='span'
                                                          style={{color: 'red'}}/>
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