import axios from 'axios';

//https://animales-api.onrender.com/animales

const API_URL = `https://animales-api.onrender.com`;

export const getAnimales = async () => {
    const response = await axios.get(`${API_URL}/animales`);
    return response;
}

