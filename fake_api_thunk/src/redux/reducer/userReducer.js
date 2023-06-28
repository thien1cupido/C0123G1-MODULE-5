import {DELETE_BY_ID, FIND_ALL_USER} from '../action/types'

const initialState = [];
const userReducer = (user = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case FIND_ALL_USER:
            return payload;
        case DELETE_BY_ID:
            return user;
        default:
            return user;
    }
}
export default userReducer;