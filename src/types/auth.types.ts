import type { IProduct } from './product.types';
import type { Role } from "./enum";
import type { IResponse } from "./global.types";

export interface ILoginData{
  email:string,
  password:string,
  
}

export interface IUser extends IResponse{
  first_name:string;
  last_name:string;
  email:string;
  role:Role;
  phone_number:string;
  wish_list:string[] | IProduct[]
}