import axios, { Axios, AxiosResponse } from "axios";
import { API } from "@/config";
import { moviesAPIRes } from "@/Interfaces/interface";

export const getTrending = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(`${API}/trending`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const getNetflixOriginals = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(
      `${API}/originals`
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const getPopular = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(`${API}/popular`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const topRated = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(`${API}/trated`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const nowPlaying = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(
      `${API}/nowplaying`
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const upComing = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(`${API}/upcoming`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const getSingleMovie = async (id: string): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(
      `${API}/movies/${id}`
    );
    return res;
  } catch (err) {
    console.log("err is", err);
    throw err;
  }
};

export const getMovieCast = async (id: string): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(
      `${API}/credits/${id}`
    );
    return res;
  } catch (err) {
    console.log("err is", err);
    throw err;
  }
};

export const getSimilarMovies = async (id: string): Promise<AxiosResponse> => {
  console.log("id is", id);
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(
      `${API}/similar/${id}`
    );
    return res;
  } catch (err) {
    console.log("err is", err);
    throw err;
  }
};
