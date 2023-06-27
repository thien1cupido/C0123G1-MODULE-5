import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/bookList')
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const save = async (value) => {
    try {
        await axios.post('http://localhost:8080/bookList', value);
    } catch (e) {
        console.log(e);
    }
}
export const getBookById = async (id) => {
    try {
        const result = await axios.get("http://localhost:8080/bookList/" + id);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const update = async (values) => {
    try {
        await axios.put("http://localhost:8080/bookList/" + values.id, values);
    } catch (e) {
        console.log(e);
    }
}
export const deleteBook = async (id) => {
    try {
        await axios.delete("http://localhost:8080/bookList/" + id);
    } catch (e) {
        console.log(e);
    }
}