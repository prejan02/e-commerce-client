import axios from "axios";
import type { ILoginData } from "../types/auth.types";


export const login = async(data:ILoginData)=>{
    try {

        const response = await axios.post('https://e-commerce-2b4z.onrender.com/api/auth/login',data)
        console.log(response);
        
        return response.data
        
    } catch (error:any) {
        console.log(error);
        
        throw error.response.data        
        
    }
}