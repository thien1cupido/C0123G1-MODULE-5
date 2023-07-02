import axios from "axios";

export async function searchByName(name) {
    try {
        return axios.get(`http://localhost:8080/facilityList?name_like=${name.search}`);
    } catch (e) {
        console.log(e);
    }
}


export const findFacilityById = (id) => {
    try {
        return axios.get("http://localhost:8080/facilityList/" + id);
    } catch (e) {
        console.log(e);
    }
}
export const save = (facility) => {
    try {
        return axios.post("http://localhost:8080/facilityList", facility);
    } catch (e) {
        console.log(e);
    }
}
export const update = (facility) => {
    try {
        return axios.put("http://localhost:8080/facilityList/"+facility.id, facility);
    } catch (e) {
        console.log(e);
    }
}

export const findAll = () => {
    try {
        return axios.get("http://localhost:8080/facilityList");
    } catch (e) {
        console.log(e);
    }
}
export const findAllPage = (page) => {
    try {
        return axios.get(`http://localhost:8080/facilityList?_page=${page}&_limit=9`);
    } catch (e) {
        console.log(e);
    }
}
export const findAllPageLimit = (page) => {
    try {
        return axios.get(`http://localhost:8080/facilityList?_page=${page}&_limit=5`);
    } catch (e) {
        console.log(e);
    }
}
export const deleteFacility = (id) => {
    try {
        axios.delete("http://localhost:8080/facilityList/" + id);
    } catch (e) {
        console.log(e);
    }
}
export const findAllRentalType =()=>{
    try {
        return axios.get("http://localhost:8080/rentalType")
    }catch (e) {
        console.log(e);
    }
}
export const findAllFacilityType =()=>{
    try {
        return axios.get(" http://localhost:8080/facilityType")
    }catch (e) {
        console.log(e);
    }
}