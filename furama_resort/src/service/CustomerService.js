import axios from "axios";

export const findAll = () => {
    try {
        return axios.get("http://localhost:8080/customerList");
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
export const updateCustomer = (customer) => {
    try {
        axios.put("http://localhost:8080/customerList/" + customer.id, customer);
    } catch (e) {
        console.log(e);
    }
}
export const save = (customer) => {
    try {
        axios.post("http://localhost:8080/customerList/", customer);
    } catch (e) {
        console.log(e);
    }
}
export const findCustomerType = () => {
    try {
        return axios.get("http://localhost:8080/customerType");
    } catch (e) {
        console.log(e);
    }
}