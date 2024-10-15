import axios from "axios";

export const getFactViaAxios = async () => {
    try {
        const response = await axios.get(`api/facts`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'failed fetch data facts');
    }
};

export const getFactViaFetch = async () => {
    try {
        const data = await fetch(`api/facts`);

        if(!data.ok) {
            const Errordata = await data.json();
            throw new Error(Errordata?.message || 'failed fetch facts')
        }

        return await data.json();
    } catch (error) {
        throw new Error(error.message || 'An error occurred');
    }
};