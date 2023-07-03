import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as facilityService from "../../../service/FacilityService";
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as Swal from "sweetalert2";

export function FacilityCreate() {
    const navigate = useNavigate();
    const [facilityType, setFacilityType] = useState([]);
    const [rentalType, setRentalType] = useState([]);
    const [rentalTypeStatus, setRentalTypeStatus] = useState("1");

    useEffect(() => {
        const getFacilityTypeApi = async () => {
            const facilityType = await facilityService.findAllFacilityType();
            setFacilityType(facilityType.data);
        }
        const getRentalTypeApi = async () => {
            const rentalType = await facilityService.findAllRentalType();
            setRentalType(rentalType.data);
        }
        getFacilityTypeApi();
        getRentalTypeApi();
    }, [])

    return (
        <Formik initialValues={{
            name: '',
            usableArea: '',
            rentalCosts: '',
            maximumNumber: '',
            facilityType: 1,
            image: '',
            rentalType: 0,
            roomStandard: '',
            poolArea: '',
            description: '',
            numberFloor: '',
            accessory: ''
        }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Không được để trống").matches(/^([A-Za-z]* )*[A-Za-z]*$/,"Tên không được chứa số"),
                    usableArea: Yup.number("Vui lòng nhập số").required("Không được để trống").moreThan(0,"Phải là số dương"),
                    rentalCosts: Yup.number("Vui lòng nhập số").required("Không được để trống").moreThan(0,"Phải là số dương"),
                    maximumNumber: Yup.number("Vui lòng nhập số").required("Không được để trống").moreThan(0,"Phải là số dương"),
                    rentalType: Yup.number().moreThan(0, "Không được để trống"),
                    roomStandard: Yup.string(),
                    description: Yup.string(),
                    numberFloor: Yup.number()
                })}
                onSubmit={values => {
                    const create = async () => {
                        await facilityService.save({
                            ...values,
                            usableArea: +values?.usableArea,
                            rentalCosts: +values?.rentalCosts,
                            facilityType: +values?.facilityType,
                            maximumNumber: +values?.maximumNumber,
                            numberFloor: +values?.numberFloor,
                            rentalType: +values?.rentalType,
                            poolArea: +values?.poolArea
                        })
                        navigate("/facility/list");
                        Swal.fire({
                            icon: "success",
                            title: "Thêm mới dịch vụ thành công!!",
                            timer: "3000"
                        })
                    }
                    create();
                }}
        >
            <div className="container-fluid" style={{marginTop: '15vh', marginBottom: '15vh'}}>
                <div className="row d-flex justify-content-center">
                    <div className="col-xxl-5 ">
                        <div className="p-5 border-form mt-5">
                            <div className="my-4 d-flex justify-content-center">
                                <h1 className="py-3">Thêm mới dịch vụ</h1>
                            </div>
                            <Form>
                                <div className="d-flex justify-content-xxl-around">
                                    <div className="mt-3 col-xxl-5 col-xl-5">
                                        <label className="form-label">Loại dịch vụ</label>
                                        <Field className="form-select" as="select" name="facilityType"
                                               onClick={(event) => setRentalTypeStatus(event.target.value)}>
                                            {
                                                facilityType.map(ft => (
                                                    <option key={ft.id} value={ft.id}>{ft.name}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <div className="mt-3 col-xxl-5 col-xl-5">
                                        <label className="form-label" htmlFor="name">Tên dịch vụ</label>
                                        <Field className="form-control" type="text" id="name"
                                               name="name"/>
                                        <ErrorMessage name="name" component="span"
                                                      style={{color: 'red'}}/>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-xxl-around">
                                    <div className="mt-3 col-xxl-5 col-xl-5">
                                        <label className="form-label" htmlFor="usableArea">Diện tích sử dụng</label>
                                        <Field className="form-control" type="number" name="usableArea"
                                               id="usableArea"/>
                                        <ErrorMessage name="usableArea" component='span'
                                                      style={{color: 'red'}}/>
                                    </div>
                                    <div className="mt-3 col-xxl-5 col-xl-5">
                                        <label className="form-label" htmlFor="rentalCosts">Chi phí thuê</label>
                                        <Field className="form-control" type="number" name="rentalCosts"
                                               id="rentalCosts"/>
                                        <ErrorMessage name="rentalCosts" component="span"
                                                      style={{color: 'red'}}/>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-xxl-around">
                                    <div className="mt-3 col-xxl-5 col-xl-5">
                                        <label className="form-label" htmlFor="maximumNumber">Số lượng người tối
                                            đa</label>
                                        <Field className="form-control" type="text" name="maximumNumber"
                                               id="maximumNumber"/>
                                        <ErrorMessage name="maximumNumber" component="span"
                                                      style={{color: 'red'}}/>
                                    </div>
                                    <div className="mt-3 col-xxl-5 col-xl-5">
                                        <label className="form-label" htmlFor="rentalType">Kiểu thuê</label>
                                        <Field as="select" className="form-select" name="rentalType" id="rentalType">
                                            <option value={0}>--Chọn kiểu thuê--</option>
                                            {
                                                rentalType.map(rt =>
                                                    <option key={rt.id} value={rt.id}>{rt.name}</option>
                                                )
                                            }
                                        </Field>
                                        <ErrorMessage name="rentalType" component='span'
                                                      style={{color: 'red'}}/>
                                    </div>
                                </div>

                                {

                                    rentalTypeStatus === "3" ? <div className="mt-3 ms-4">
                                            <label className="form-label" htmlFor="accessory">Dịch vụ miễn phí đi
                                                kèm</label>
                                            <Field className="form-control" type="text" name="accessory"
                                                   style={{width: '30.3vw'}}
                                                   id="accessory"/>
                                            <ErrorMessage name="accessory" component='span'
                                                          style={{color: 'red'}}/>
                                        </div>
                                        : ''
                                }
                                {
                                    rentalTypeStatus === "2" || rentalTypeStatus === "1" ?
                                        rentalTypeStatus === "1" ?
                                            <>
                                                <div className="d-flex justify-content-around">
                                                    <div className="mt-3 col-xxl-3 col-xl-3">
                                                        <label className="form-label" htmlFor="roomStandard">Tiêu chuẩn
                                                            phòng</label>
                                                        <Field className="form-control" type="text" name="roomStandard"
                                                               id="roomStandard"/>
                                                        <ErrorMessage name="roomStandard" component='span'
                                                                      style={{color: 'red'}}/>
                                                    </div>
                                                    <div className="mt-3 col-xxl-3 col-xl-3">
                                                        <label className="form-label" htmlFor="numberFloor">Số
                                                            tầng</label>
                                                        <Field className="form-control" type="text" name="numberFloor"
                                                               id="roomStandard"/>
                                                        <ErrorMessage name="numberFloor" component='span'
                                                                      style={{color: 'red'}}/>
                                                    </div>
                                                    <div className="mt-3 col-xxl-3 col-xl-3">
                                                        <label className="form-label" htmlFor="poolArea">Diện tích
                                                            hồ
                                                            bơi</label>
                                                        <Field className="form-control" type="text" name="poolArea"
                                                               id="poolArea"/>
                                                        <ErrorMessage name="poolArea" component='span'
                                                                      style={{color: 'red'}}/>
                                                    </div>

                                                </div>
                                                <div className="mt-3 ms-4">
                                                    <label className="form-label" htmlFor="description">Mô tả tiện nghi
                                                        khác</label>
                                                    <Field className="form-control" as="textarea" rows={3}
                                                           style={{width: '30.3vw'}}
                                                           name="description"
                                                           id="description"/>
                                                    <ErrorMessage name="description" component='span'
                                                                  style={{color: 'red'}}/>
                                                </div>
                                            </>
                                            : <>
                                                <div className="d-flex justify-content-around">
                                                    <div className="mt-3 col-xxl-5 col-xl-5">
                                                        <label className="form-label" htmlFor="roomStandard">Tiêu chuẩn
                                                            phòng</label>
                                                        <Field className="form-control" type="text" name="roomStandard"
                                                               id="roomStandard"/>
                                                        <ErrorMessage name="roomStandard" component='span'
                                                                      style={{color: 'red'}}/>
                                                    </div>
                                                    <div className="mt-3 col-xxl-5 col-xl-5">
                                                        <label className="form-label" htmlFor="numberFloor">Số tầng</label>
                                                        <Field className="form-control" type="text" name="numberFloor"
                                                               id="roomStandard"/>
                                                        <ErrorMessage name="numberFloor" component='span'
                                                                      style={{color: 'red'}}/>
                                                    </div>
                                                </div>
                                                <div className="mt-3 ms-4">
                                                    <label className="form-label" htmlFor="description">Mô tả tiện nghi
                                                        khác</label>
                                                    <Field className="form-control" as="textarea" rows={3}
                                                           style={{width: '30.3vw'}}
                                                           name="description"
                                                           id="description"/>
                                                    <ErrorMessage name="description" component='span'
                                                                  style={{color: 'red'}}/>
                                                </div>
                                            </> : ''
                                }
                                <div className="mt-3 ms-4">
                                    <label className="form-label" htmlFor="image">Ảnh</label>
                                    <Field className="form-control" type="text" name="image" id="image"
                                           style={{width: '30.3vw'}}/>
                                    <ErrorMessage name="image" component='span'
                                                  style={{color: 'red'}}/>
                                </div>
                                <div className="my-5">
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-success">Thêm mới
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Formik>
    )
}

// const firebaseConfig = {
//     apiKey: "AIzaSyC4aFqn1iFEK1CBnKxuPNDE_1AUnZtToZU",
//     authDomain: "group1-379a8.firebaseapp.com",
//     projectId: "group1-379a8",
//     storageBucket: "group1-379a8.appspot.com",
//     messagingSenderId: "369039862755",
//     appId: "1:369039862755:web:c8761f39faeb0a6ad2ced6",
//     measurementId: "G-3LL4BVYJ6P"
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// let uploader = document.getElementById('uploader');
// let fileButton = document.getElementById('btnThumbnailURL');
// fileButton.addEventListener('change', function (e) {
//     let file = e.target.files[0];
//     let storageRef = firebase.storage().ref('img/' + file.name);
//     let task = storageRef.put(file);
//     task.on('state_changed', function progress(snapshot) {
//         let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         uploader.value = percentage;
//
//         if (percentage === 100) {
//             document.getElementById('createButton').removeAttribute('disabled');
//         } else {
//             document.getElementById('createButton').setAttribute('disabled', 'disabled');
//         }
//     });
//
//     task.then(snapshot => snapshot.ref.getDownloadURL())
//         .then(url => {
//             document.getElementById('thumbnailURL').setAttribute("value", url);
//             previewImage.style.display = 'none';
//             newImage.src = url;
//             newImage.style.display = 'block';
//         });
// });
//
//
// import {initializeApp} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyC4aFqn1iFEK1CBnKxuPNDE_1AUnZtToZU",
//     authDomain: "group1-379a8.firebaseapp.com",
//     projectId: "group1-379a8",
//     storageBucket: "group1-379a8.appspot.com",
//     messagingSenderId: "369039862755",
//     appId: "1:369039862755:web:c8761f39faeb0a6ad2ced6",
//     measurementId: "G-3LL4BVYJ6P"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

