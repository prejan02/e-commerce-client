import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import type { ILoginData } from "../../types/auth.types";
import { loginSchema } from "../../schema/auth.schema";
import Input from "../common/inputs/input";
import { login } from "../../api/auth.api";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router";

const Loginform = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  const {mutate,isPending} =useMutation({
    mutationFn:login,
    onSuccess:(response)=>{
      console.log(response);
      toast.success(response?.message ?? "login success")
      localStorage.setItem('token',response.data.access_token)
      localStorage.setItem('user',JSON.stringify(response.data.data))
      navigate('/')
      
    },
    onError:(error)=>{
      console.log(error);
      toast.success(error?.message ?? "login failed")
           

    },
    mutationKey:['login_mutation']
  })

  const onSubmit = (data: ILoginData) => {
    setLoading(true);
    mutate(data)
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="mt-5 flex flex-col gap-6">
            {/* input field */}
            <Input
              name="email"
              label="Email:"
              placeholder="example@gmail.com"
              id="email"
              required
            />
            {/* password inpit field */}
            <Input
              name="password"
              label="Password:"
              placeholder="*****************"
              id="password"
              required
              type="password"
            />

            <div className="w-full mt-6">
              <button
                type="submit"
                disabled={isPending}
                className={
                  " cursor-pointer w-full bg-violet-600 py-3 rounded-md text-white font-bold transition-all duration-75 hover:bg-violet-800 disabled:bg-violet-500 disabled:cursor-not-allowed"
                }
              >
                {loading? 'Signing In......': 'Sign In'}
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Loginform;
