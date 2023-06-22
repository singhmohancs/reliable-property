import { API_URL } from "@/constant/apiUrl";
import axiosInstance from "@/lib/http";
import { clearStorageData, getStorageData } from "@/lib/storage";

const SERVER_URL = process.env.NEXT_PUBLIC_API_URL;
export const login = async (data) => {
    try {
        const url = `${SERVER_URL}/${API_URL.login}`;
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (err) {
        return err.response.data
    }
}

export const register = async (data) => {
    try {
        const url = `${SERVER_URL}/${API_URL.register}`;
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (err) {
        return err.response.data
    }
}

export const forgotpassword = async (data) => {
    try {
 
        const url = `${SERVER_URL}/${API_URL.forgot}`;
        const response = await axiosInstance.post(url, data);
        console.log(response,"response")
        return response.data;
    } catch (err) {
        return err.response.data
    }
}

export const getUser = async (data) => {
    try {
        const url = `${SERVER_URL}/${API_URL.userDetails}`;
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (err) {
        return err.response.data
    }
}

export const logoutUser = async () => {
    clearStorageData();
    return true;
}

export const getToken = () => {
    return getStorageData("token");
}