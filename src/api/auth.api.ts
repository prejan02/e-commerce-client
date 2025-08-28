import type { ILoginData } from "../types/auth.types";
import api from './'


export const login = async (data: ILoginData) => {
  try {
    const response = await api.post(
      `/auth/login`,
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
    const response = await api.post(
      `/auth/register`,
      data
    );
    console.log(response);

    return response.data;
  } catch (error: any) {
    console.log(error);

    throw error.response.data;
  }
};
