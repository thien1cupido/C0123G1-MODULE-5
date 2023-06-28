import {useDispatch} from "react-redux";
import {getAllUser} from "../redux/action/user";

export function UserHeader() {
    const dispatch = useDispatch()
    const getUserList = () => {
        dispatch(getAllUser());
    }
    return (
        <div className="container">
            <div className="d-flex py-lg-4">
                <div className="col-xxl-5 d-flex align-items-center">
                    <button className="btn btn-primary ms-5" style={{left:'0'}} onClick={getUserList}>Get user</button>
                </div>
                <div className="col-xxl-6">
                    <h1>User List</h1>
                </div>
            </div>
        </div>
    )
}