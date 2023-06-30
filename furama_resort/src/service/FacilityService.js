import axios from "axios";

export const findFacility = (id) => {
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

export const findAll = () => {
    try {
        return axios.get("http://localhost:8080/facilityList");
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