import React, {useEffect, useState} from "react";
import * as contractService from "../../../service/ContractService"

export function ContractList() {
    const [contractList, setContractList] = useState([]);
    const [customer, setCustomer] = useState(null);
    const fetchApi = async () => {
        const result = await contractService.findAll();
        setContractList(result);
        console.log(result)
    }
    useEffect(() => {
        fetchApi();
    }, [])
    return (
        <>
            <div className="container">
                <div style={{height:'15vh'}}></div>
                <h1 className="text-center pb-5">Danh sách hợp đồng</h1>
                <table className="table table-striped text-center">
                    <thead>
                    <tr>
                        <th>Mã hợp đồng</th>
                        <th>Mã khách hàng</th>
                        <th>Mã dịch vụ</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Tiền đặt cọc</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        contractList.map((contract) => (
                            <tr key={contract.id}>
                                <td>{"HD_"+contract.id}</td>
                                <td>{contract.customer||''}</td>
                                <td>{contract.facility}</td>
                                <td>{contract.startDayContract}</td>
                                <td>{contract.endDayContract}</td>
                                <td>{contract.deposits}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <div style={{height:'15vh'}}></div>
            </div>
        </>
    )
}