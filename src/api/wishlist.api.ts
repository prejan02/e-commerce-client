import api from "./";

export const add_to_wishlist = async (id: string) => {
  try {
    const response = await api.post(`/wish-list`, { id });
    console.log(response);

    return response.data;
  } catch (error: any) {
    console.log(error);

    throw error.response.data;
  }
};

//get wishlist
export const get_Wishlist = async () => {
  try {
    const response = await api.get(`/wish-list`);
    console.log(response);

    return response.data;
  } catch (error: any) {
    console.log(error);

    throw error.response.data;
  }
};