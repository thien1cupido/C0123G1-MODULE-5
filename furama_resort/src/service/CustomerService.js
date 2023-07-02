import axios from "axios";

export const deleteCustomer = async (id) => {
    try {
        await axios.delete("http://localhost:8080/customerList/" + id);
    } catch (e) {
        console.log(e)
    }
}

export const findAll = async () => {
    try {
        return await axios.get("http://localhost:8080/customerList");
    } catch (e) {
        console.log(e);
    }
}

export const findAllPage = async (page) => {
    try {
        return await axios.get(`http://localhost:8080/customerList?_page=${page}&_limit=5`);
    } catch (e) {
        console.log(e);
    }
}
export const findCustomerById = (id) => {
    try {
        return axios.get("http://localhost:8080/customerList/" + id)
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
export const save = async (customer) => {
    try {
        await axios.post("http://localhost:8080/customerList/", customer);
    } catch (e) {
        console.log(e);
    }
}
export const findCustomerType = async () => {
    try {
        return await axios.get("http://localhost:8080/customerType");
    } catch (e) {
        console.log(e);
    }
}