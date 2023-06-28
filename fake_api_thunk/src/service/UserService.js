import request from '../http-common';

const findAll = () => {
    return request.get('/userList')
}
const deleteUserById = (id) => {
    return request.delete('/userList/'+id)
}
const userService = {
    findAll,
    deleteUserById
}
export default userService;