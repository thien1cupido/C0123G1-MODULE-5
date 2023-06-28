import userService from "../../service/UserService";
import {DELETE_BY_ID, FIND_ALL_USER} from "./types";

export const getAllUser = () => async (dispatch) => {
    try {
        const res = await userService.findAll();
        dispatch({
            type: FIND_ALL_USER,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
    }
}
export const deleteUser = (id) => async (dispatch) => {
    try {
        await userService.deleteUserById(id);
        dispatch({
            type: DELETE_BY_ID
        })
    } catch (e) {
        console.log(e)
    }
}