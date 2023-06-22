import { API_URL } from "@app/constants/apiUrl";
import axiosInstance from "@app/lib/http";

const SERVER_URL = process.env.NEXT_PUBLIC_API_URL;

export const saveNiche = async (data) => {
    try {
        const url = `${SERVER_URL}/${API_URL.createNiche}`;
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (err) {
        return err.response.data
    }
}

export const getAllNiches = async () => {
    try {
        const url = `${SERVER_URL}/${API_URL.getNiches}`;
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (err) {
        return err.message || 'Server error: ' + err.message;
    }
}

export const getExcludedFilters = async () => {
    try {
        const url = `${SERVER_URL}/${API_URL.excludedFilters}`;
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (err) {
        return err.response.data;
    }
}

export const getNiche = async (id) => {
    try {
        const url = `${SERVER_URL}/${API_URL.getNiches}/${id}`;
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (err) {
        return err.response.data;
    }
}

export const updateNiche = async (id, data) => {
    try {
        const url = `${SERVER_URL}/${API_URL.updateNiches}/${id}`;
        const response = await axiosInstance.put(url, data);
        return response.data;
    } catch (err) {
        return err.response.data;
    }
}

export const getNicheWithDomains = async (id,currentPage,limit) => {
    try {
        const url = `${SERVER_URL}/${API_URL.nicheWithDomains}/${id}?page=${currentPage}&&limit=${limit}`;
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (err) {
        return err.response.data;
    }
}





