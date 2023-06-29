import React, {useEffect, useState} from "react";
import * as facilitiesService from "../../../service/FacilityService";

export function FacilityList() {
    const [facilities, setFacilities] = useState([]);
    useEffect(() => {
        const getFacilitiesApi = async () => {
            const facilityList = await facilitiesService.findAll();
            setFacilities(facilityList.data);
        }
        getFacilitiesApi();
    }, [])
    return (
        <>
            <div className="container" style={{marginTop: '15vh'}}>
                <h1 className="text-center py-5">Danh sách dịch vụ</h1>
                <table className="table table-striped text-center">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tên dịch vụ</th>
                        <th>Diện tích sử dụng(m<sup>2</sup>)</th>
                        <th>Chi phí thuê($)</th>
                        <th>Số lượng người tối đa</th>
                        <th>Số điện thoại</th>
                        <th>Tiêu chuẩn</th>
                        <th>Số tầng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        facilities.map(f => (
                            <tr key={f.id}>
                                <td>{f.id}</td>
                                <td>{f.name}</td>
                                <td>{f.usableArea}</td>
                                <td>{f.rentalCosts}</td>
                                <td>{f.maximumNumber}</td>
                                <td>{f.rentalType}</td>
                                <td>{f.roomStandard}</td>
                                <td>{f.numberFloor}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}