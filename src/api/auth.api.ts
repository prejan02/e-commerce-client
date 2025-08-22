import axios from "axios";
import type { ILoginData } from "../types/auth.types";

const API_URL = import.meta.env.VITE_API_BASE_URL

export const login = async (data: ILoginData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
      data
    );
    console.log(response);

    return response.data;
  } catch (error: any) {
    console.log(error);

    throw error.response.data;
  }
};
export const register = async (data: ILoginData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
      data
    );
    console.log(response);

    return response.data;
  } catch (error: any) {
    console.log(error);

    throw error.response.data;
  }
};
