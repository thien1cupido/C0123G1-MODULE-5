import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/customerList");
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const findCustomerById = async (id) => {
    try {
        const result = await axios.get("http://localhost:8080/customerList/" + id)
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const updateCustomer = async (customer) => {
    try {
        await axios.put("http://localhost:8080/customerList/" + customer.id, customer);
    } catch (e) {
        console.log(e);
    }
}
export const findCustomerType=async ()=>{
    try {
        const result=await axios.get("  http://localhost:8080/customerType");
        return result.data;
    }catch (e) {
        console.log(e);
    }
}