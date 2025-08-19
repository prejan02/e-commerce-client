import { useFormContext } from "react-hook-form"
import { LuAsterisk } from "react-icons/lu"


type Props = {
    
    label:string,
    id:string,
    name:string,
    placeholder?:string,
    type?:"text" | 'number' | 'password'
    required?:boolean
}

const Input = ({id,label,name,placeholder='placeholder',type='text',required=false}: Props) => {
    const {register,watch,formState:{errors}} = useFormContext()
  return (
    <div className={"flex flex-col"}>
                <div className="flex">
                  <label
                    htmlFor={id}
                    className={"text-gray-800 font-semibold text-lg"}
                  >
                    {label}
                  </label>
                {required && <LuAsterisk size={14} className="text-red-500" /> }
                </div>
                <input
                  id={id}
                  className={`px-2 py-3 my-2 border ${
                    errors[name]
                      ? "border-red-500 rounded-md focus:outline-red-500"
                      : " border-violet-400 rounded-md focus:outline-violet-400"
                  }`}
                  placeholder={placeholder}
                  {...register(name)}
                  value={watch(name)}
                  type={type}
                />
    
                <p className="text-red-500 text-xs h-1 -mt-1">
                  {errors[name as string] ? errors[name]?.message as string : ""}
                </p>
              </div>
  )
}

export default Input