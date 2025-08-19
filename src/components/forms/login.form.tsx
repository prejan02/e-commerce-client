import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import type { ILoginData } from "../../types/auth.types";
import { loginSchema } from "../../schema/auth.schema";
import Input from "../common/inputs/input";

const Loginform = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });
  

  const onSubmit = (data: ILoginData) => {
    console.log(data);
  };
  return (
    <div>
      <FormProvider {...methods}>

      <form onSubmit={ methods.handleSubmit(onSubmit)}>
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
              className={
                "cursor-pointer w-full bg-violet-600 py-3 rounded-md text-white font-bold transition-all duration-75 hover:bg-violet-800"
              }
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
      </FormProvider>

    </div>
  );
};

export default Loginform;
