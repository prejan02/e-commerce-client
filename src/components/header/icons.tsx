/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiHeart } from "react-icons/ci";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { useAuth } from "../../context/auth.context";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../api/auth.api";
import toast from "react-hot-toast";

const IconSection = () => {
  // const user = JSON.parse(localStorage.getItem('user') as string) ?? null
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

  const get_user_full_name = (user: any) => {
    return `${user?.first_name} ${user?.last_name}`;
  };

  return (
    <div className="flex gap-3 items-center">
      <Link to={"/wishlist"}>
        <CiHeart size={30} className="text-violet-600" />
      </Link>
      <Link to={"/cart"}>
        <LiaCartArrowDownSolid size={28} className="text-violet-600" />
      </Link>
      {user ? (
        <div className="flex items-center gap-2">
          <IoPersonCircleOutline size={28} className="text-violet-600" />
          <div className="mt-4">
            <p className="font-semibold">{get_user_full_name(user)}</p>
            <p
              onClick={() => {
                mutate();
              }}
              className="text-violet-600 cursor-pointer"
            >
              {isPending ? "Logging Out" : "Logout"}
            </p>
          </div>
        </div>
      ) : (
        <Link to={"/login"}>
          <div className=" cursor-pointer border border-violet-400 py-1 px-3 rounded-md flex gap-1 items-center ">
            <IoMdLogIn size={28} className="text-violet-600" />
            <span className="text-violet-600 font-semibold">Login</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default IconSection;
