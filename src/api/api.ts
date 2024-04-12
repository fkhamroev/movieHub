import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4",
  headers :{
    "X-API-KEY" : "RB0QEDE-2DH4J5D-P6G500Q-HYT1341" 
  }
});

export const getAllData = async (url: string) => {
  return await instance.get(`/${url}`, {});
};

export default instance;
