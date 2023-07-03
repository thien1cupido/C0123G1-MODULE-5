import axios from "axios";

export async function search(values) {
    try {
        return axios.get(`http://localhost:8080/contractList?id=${values.search}`);
    } catch (e) {
        console.log(e)
    }
}


export const save = (contract) => {
    try {
        axios.post("http://localhost:8080/contractList/", contract)
    } catch (e) {
        console.log(e)
    }
}


export const findAll = () => {
    try {
        return axios.get("http://localhost:8080/contractList");
    } catch (e) {
        console.log(e);
    }
}
export const deleteContractById = (id) => {
    try {
        return axios.delete("http://localhost:8080/contractList/" + id);
    } catch (e) {
        console.log(e);
    }
}
export const findAllPage = (page) => {
    try {
        return axios.get(`http://localhost:8080/contractList?_page=${page}&_limit=5`);
    } catch (e) {
        console.log(e);
    }
}