import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';


export function MedicalDeclaration() {
    return (
        <Formik
            initialValues={{
                name: '',
                passport: '',
                birthDay: '',
                gender: '',
                country: '',
                company: '',
                workingParts: '',
                medical: '',
                province: '',
                district: '',
                ward: '',
                houseNumber: '',
                phone: '',
                email: '',
                move: '',
                symptom: [],
                contact: []

            }}
            validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                passport:Yup.string().required("Required"),
                birthDay:Yup.number().required("Required").min(1901),
                country: Yup.string().required("Required"),
                province:Yup.string().required("Required"),
                district:Yup.string().required("Required"),
                ward:Yup.string().required("Required"),
                houseNumber:Yup.string().required("Required"),
                phone:Yup.number().required("Required"),
                email:Yup.string().required("Required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,"Invalid email address"),
            })}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    console.log(values)
                    setSubmitting(false)
                    // toast("Add contact successfully!!!")
                }, 1500)
            }}
        >
            {
                ({isSubmitting}) => (
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-center">
                                <div className="row">
                                    <h1>Tờ khai y tế</h1>
                                    <Form>
                                        <div>
                                            <label className="form-label" htmlFor="name">Họ tên</label>
                                            <Field className="form-control" type="text" id="name" name="name"/>
                                            <ErrorMessage name="name" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="passport">Số hộ chiếu /CMND</label>
                                            <Field className="form-control" type="text" id="passport" name="passport"/>
                                            <ErrorMessage name="passport" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="birthDay">Năm sinh</label>
                                            <Field className="form-control" type="text" id="birthDay" name="birthDay"/>
                                            <ErrorMessage name="birthDay" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label me-1">Giới tính</label>
                                            <Field className="ms-1" type="radio" name="gender" value="0"/>
                                            <label className="form-label m-1">Nam</label>
                                            <Field className="ms-1" type="radio" name="gender" value="1"/>
                                            <label className="form-label ms-1">Nữ</label>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="country">Quốc tịch</label>
                                            <Field className="form-control" type="text" id="country"
                                                   name="country"/>
                                            <ErrorMessage name="country" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="company">Công ty làm việc</label>
                                            <Field className="form-control" type="text" id="company"
                                                   name="company"/>
                                            <ErrorMessage name="company" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="workingParts">Bộ phận làm
                                                việc</label>
                                            <Field className="form-control" type="text" id="workingParts"
                                                   name="workingParts"/>
                                            <ErrorMessage name="workingParts" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3 d-flex">
                                            <label className="form-label me-2" htmlFor="medical">Có thẻ bảo hiểm y
                                                tế</label>
                                            <Field type="checkbox" id="medical"
                                                   name="medical"/>
                                        </div>
                                        <h4>Địa chỉ liên lạc tại Việt Nam</h4>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="province">Tỉnh thành</label>
                                            <Field className="form-control" type="text" id="province"
                                                   name="province"/>
                                            <ErrorMessage name="country" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="district">Quận /huyện</label>
                                            <Field className="form-control" type="text" id="district"
                                                   name="district"/>
                                            <ErrorMessage name="district" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="ward">Phường /xã</label>
                                            <Field className="form-control" type="text" id="ward"
                                                   name="ward"/>
                                            <ErrorMessage name="ward" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="font-weight-bold" htmlFor="houseNumber">Số nhà, phố, tổ
                                                dân phố /thôn
                                                /đội</label>
                                            <Field className="form-control" type="text" id="houseNumber"
                                                   name="houseNumber"/>
                                            <ErrorMessage name="houseNumber" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="phone">Điện thoại</label>
                                            <Field className="form-control" type="text" id="phone"
                                                   name="phone"/>
                                            <ErrorMessage name="phone" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label" htmlFor="email">Email</label>
                                            <Field className="form-control" type="text" id="email"
                                                   name="email"/>
                                            <ErrorMessage name="email" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label style={{fontWeight: 'bolder'}}>Trong vòng 14 ngày qua, Anh /Chị có
                                                đến quốc gia /vùng lãnh thổ nào (Có thể qua nhiều quốc gia)</label>
                                            <Field className="form-control" type="text" as="textarea" cols='3'
                                                   name="move"/>
                                            <ErrorMessage name="move" component="span" style={{color: "red"}}/>
                                        </div>
                                        <div className="mt-3">
                                            <label style={{fontWeight: 'bolder'}}>Trong vòng 14 ngày qua, Anh /Chị có
                                                thấy xuất hiện dấu hiệu nào sau đây không?</label>
                                            <div className="d-flex">
                                                <Field className="me-2" type="checkbox" value="fever"
                                                       name="symptom"/>
                                                <label>Sốt</label>
                                            </div>
                                            <div className="d-flex">
                                                <Field className="me-2" type="checkbox" value="cough"
                                                       name="symptom"/>
                                                <label>Ho</label>
                                            </div>
                                            <div className="d-flex">
                                                <Field className="me-2" type="checkbox" value="shortnessOfBreath"
                                                       name="symptom"/>
                                                <label>Khó thở</label>
                                            </div>
                                            <div className="d-flex">
                                                <Field className="me-2" type="checkbox" value="pneumonia"
                                                       name="symptom"/>
                                                <label>Viêm phổi</label>
                                            </div>
                                            <div className="d-flex">
                                                <Field className="me-2" type="checkbox" value="soreThroat"
                                                       name="symptom"/>
                                                <label>Đau họng</label>
                                            </div>
                                            <div className="d-flex">
                                                <Field className="me-2" type="checkbox" value="tired"
                                                       name="symptom"/>
                                                <label>Mệt mỏi</label>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <label style={{fontWeight: 'bolder'}}>Trong vòng 14 ngày qua, Anh /Chị có
                                                tiếp xúc với?</label>
                                            <div className="d-flex">
                                                <Field className="me-2 align-items-baseline" type="checkbox"
                                                       value="sickPeopleInTheCountry"
                                                       name="contact"/>
                                                <label>Người bệnh hoặc nghi ngờ,mắc bệnh COVID-19</label>
                                            </div>
                                            <div className="d-flex">
                                                <Field className="me-2 align-items-baseline" type="checkbox"
                                                       value="overseasSickPeople"
                                                       name="contact"/>
                                                <label>Người từ nước có mắc bệnh COViD-19</label>
                                            </div>
                                            <div className="d-flex">
                                                <Field className="me-2 d-flex align-items-baseline" type="checkbox"
                                                       value="personWithExpression"
                                                       name="contact"/>
                                                <label>Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</label>
                                            </div>
                                        </div>
                                        {
                                            isSubmitting ? "loading" :
                                                <div className="d-flex justify-content-center">
                                                    <button className="mt-3 btn btn-success" type="submit">Submit
                                                    </button>
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
