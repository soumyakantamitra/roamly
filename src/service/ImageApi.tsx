import axios from "axios";

const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
const baseApi = 'https://api.pexels.com/v1/search?query=';

const config = {
  headers: {
    Authorization: apiKey
  }
}

export default async function getLocationImage(data: string) {

  const apiUrl = baseApi + data;
  try {
    const response = await axios.get(apiUrl, config);
    console.log(response.data.photos[0].src.original);
    return response.data.photos[0].src.original;
  } 
  catch (error) {
    console.error('Error fetching images:', error);
  }
}