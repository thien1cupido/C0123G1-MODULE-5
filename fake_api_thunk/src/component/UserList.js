import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getAllUser} from "../redux/action/user";
import Swal from "sweetalert2";
export function UserList() {
    const userList = useSelector(state => state.users)
    const dispatch = useDispatch()
    const deleteUsers= async (id)=>{
        await dispatch(deleteUser(id));
        fetchApi()
        Swal.fire({
            icon:"success",
            title:"Delete success!!",
            timer:"3000"
        })

    }
    const showAlertDelete= async(id)=>{
        Swal.fire({
            icon: "warning",
            title: "Bạn có muốn xoá Không ?",
            text: "Bạn có muốn xoá tên " + " " + id + " " + " ngày không ?",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Oke"
        })
            .then((res)=>{
                if (res.isConfirmed){
                    deleteUsers(id)
                }
            })
    }
    const fetchApi=()=>{
         dispatch(getAllUser())
    }
    return (
        <>
            <div className="container">

                <table className="table table-striped text-center">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        userList.map((use) => (
                            <tr key={use.id}>
                                <td>{use.id}</td>
                                <td>{use.name}</td>
                                <td>{use.email}</td>
                                <td>{use.website}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>showAlertDelete(use.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}