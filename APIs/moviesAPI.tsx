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

export const action = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(`${API}/action`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const mystery = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(`${API}/mystery`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const animation = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(
      `${API}/animation`
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const scifi = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(`${API}/scifi`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const horror = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(`${API}/horror`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const romance = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(`${API}/romance`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const tv = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(`${API}/tv`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const western = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(`${API}/western`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const comedy = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<moviesAPIRes> = await axios.get(`${API}/comedy`);
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
