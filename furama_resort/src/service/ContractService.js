import axios from "axios";

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