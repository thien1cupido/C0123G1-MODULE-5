import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(' http://localhost:8080/todoList')
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const save = async (todoList) => {
    try {
        await axios.post('http://localhost:8080/todoList', todoList)
    } catch (e) {
        console.log(e)
    }
}