export function ServiceList() {
    return (
        <>
            <div className="container">
                <h1 className="text-center">Danh sách khách hàng</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tên dịch vụ</th>
                        <th>Diện tích sử dụng</th>
                        <th>Chi phí thuê</th>
                        <th>Số lượng người tối đa</th>
                        <th>Số điện thoại</th>
                        <th>Kiểu thuê</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Villa</td>
                        <td>20 m2</td>
                        <td>3 triệu</td>
                        <td>5 người</td>
                        <td>09123235467</td>
                        <td>Tháng</td>
                        <td>
                            <button className="btn btn-warning">Sửa</button>
                            <button className="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Villa</td>
                        <td>20 m2</td>
                        <td>3 triệu</td>
                        <td>5 người</td>
                        <td>09123235467</td>
                        <td>Ngày</td>
                        <td>
                            <button className="btn btn-warning">Sửa</button>
                            <button className="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Villa</td>
                        <td>20 m2</td>
                        <td>3 triệu</td>
                        <td>3 người</td>
                        <td>09123235467</td>
                        <td>Năm</td>
                        <td>
                            <button className="btn btn-warning">Sửa</button>
                            <button className="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Villa</td>
                        <td>20 m2</td>
                        <td>300 trăm</td>
                        <td>5 người</td>
                        <td>09123235467</td>
                        <td>Giờ</td>
                        <td>
                            <button className="btn btn-warning">Sửa</button>
                            <button className="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Villa</td>
                        <td>20 m2</td>
                        <td>3 triệu</td>
                        <td>5 người</td>
                        <td>09123235467</td>
                        <td>Tháng</td>
                        <td>
                            <button className="btn btn-warning">Sửa</button>
                            <button className="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Villa</td>
                        <td>20 m2</td>
                        <td>3 triệu</td>
                        <td>5 người</td>
                        <td>09123235467</td>
                        <td>Tháng</td>
                        <td>
                            <button className="btn btn-warning">Sửa</button>
                            <button className="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}