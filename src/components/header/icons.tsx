import { LiaCartArrowDownSolid } from "react-icons/lia";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { GoHeart } from "react-icons/go";

export const IconSection =()=>{
    const user = JSON.parse(localStorage.getItem('user') as string ) ?? null
    const get_user_full_name = (user:any) =>{
        return `${user?.first_name} ${user?.last_name} `
    }
    return(
        <div className="flex gap-3 items-center" >
            <GoHeart size={28} className="text-violet-600 " />
            <LiaCartArrowDownSolid size={28} className="text-violet-600 "/>
            {user ? <div className="flex items-center gap-2">
                <IoPersonCircleOutline size={28} className="text-violet-600 "/>
                <div className="mt-4">
                    <p className="font-semibold">{get_user_full_name(user)} </p>
                    <p className="text-violet-600 ">Logout</p>
                </div>
            </div>:
                <div className="cursor-pointer border border-violet-400 py-1 px-3 rounde-md flex gap-1 items-center">
                    <IoMdLogIn size={28} className="text-violet-600" />
                    <span className="text-violet-600 font-semibold">Login</span>
                </div>
            }
        </div>

    )
}