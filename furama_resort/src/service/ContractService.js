import axios from "axios";

export const save= async (contract) =>{
    try {
        await axios.post("http://localhost:8080/contractList/",contract)
    }catch (e) {
        console.log(e)
    }
}


export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/contractList");
        return result.data;
    } catch (e) {
        console.log(e);
    }
}