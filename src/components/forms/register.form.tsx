import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import type { ILoginData } from "../../types/auth.types";
import Input from "../common/inputs/input";
import { registerSchema } from "../../schema/register.schema";

const RegisterForm = () => {
  const methods = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password:"",
      phone: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "all",
  });

  const onSubmit = (data: ILoginData) => {
    console.log(data);
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className=" flex flex-col gap-4">
            {/* first_name */}
            <Input
              name="first_name"
              label="First Name:"
              placeholder="Jack"
              id="first_name"
              required
            />

            {/* last_name */}
            <Input
              name="last_name"
              label="Last Name:"
              placeholder="Doe"
              id="last_name"
              required
            />

            {/* phone */}
            <Input
              name="phone"
              label="Phone:"
              placeholder="+977 986543219"
              id="phone"
              required
            />
            {/* email */}
            <Input
              name="email"
              label="Email:"
              placeholder="example@gmail.com"
              id="email"
              required
            />

            {/* password */}
            <Input
              name="password"
              label="Password:"
              placeholder="****************"
              id="password"
              type="password"
              required
            />
            {/* confirm_password */}
            <Input
              name="confirm_password"
              label="Confirm Password:"
              placeholder="****************"
              id="confirm_password"
              type="password"
              required
            />


            <div className="w-full mt-6">
              <button
                className="cursor-pointer text-white py-3 w-full bg-violet-600 rounded-md transition-all font-bold duration-75 hover:bg-violet-800"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
