import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../../context/auth.context"
import { logout } from "../../../api/auth.api";
import type { IUser } from "../../../types/auth.types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";



const AdminNavbar = () => {
  const { user,  setUser } = useAuth();
  const navigate = useNavigate();


    const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      setUser(null);
      navigate("/login", { replace: true });
      toast.success(data.message || "Logged out");
    },
    onError: (error) => {
      toast.error(error?.message || "something went wrong");
    },
  });
  console.log(user);

  const get_user_full_name = (user: IUser | null ) => {
    return `${user?.first_name} ${user?.last_name}`;
  };
  return (
    <nav className="w-full h-full flex justify-between items-center px-6">
        <div>
            <p className="capitalize text-lg font-semibold italic text-violet-700">Welcome Back, {(user?.role?? 'ADMIN').toLocaleLowerCase()}</p>
        </div>
        <div>
            <p className="text-lg font-semibold text-violet-800">{get_user_full_name(user)} </p>
            <div>
                <p onClick={()=>{mutate()}} className="text-[16px] text-red-500 font-semibold cursor-pointer">{isPending? 'Pending' : 'Logout'}</p>
            </div>
        </div>

    </nav>
  )
}

export default AdminNavbar