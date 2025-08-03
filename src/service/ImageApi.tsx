import axios from "axios";

const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
const baseApi = 'https://api.pexels.com/v1/search?query=';

const config = {
  headers: {
    Authorization: apiKey
  }
}

const getFromLocalStorage = (key: string) => {
  const storage = localStorage.getItem("cachedImages");
  if (storage) {
    const cachedStorage = JSON.parse(storage);
    if (key in cachedStorage) {
      return cachedStorage[key];
    }
  }
  return false;
};

const setToLocalStorage = (key: string, value: string) => {
  const storage = localStorage.getItem("cachedImage");
  if (storage) {
    const cachedStorage = JSON.parse(storage);
    cachedStorage[key] = value;
  }
  else {
    localStorage.setItem("cachedImages", JSON.stringify({[key] : value}));
  }

};

export default async function getLocationImage(data: string) {

  const cachedImage = getFromLocalStorage(data);
  if (cachedImage) {
    return cachedImage;
  }

  const apiUrl = baseApi + data;
  try {
    const response = await axios.get(apiUrl, config);
    // console.log(response.data.photos[0].src.original);
    setToLocalStorage(data, response.data.photos[0].src.original);
    return response.data.photos[0].src.original;
  } 
  catch (error) {
    console.error('Error fetching images:', error);
  }
}