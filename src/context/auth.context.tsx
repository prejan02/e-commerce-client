import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { IUser } from "../types/auth.types";
import { get_profile } from "../api/auth.api";

interface IContext {
  user: null | IUser;
  setUser: Dispatch<SetStateAction<null>>;
  isLoading: boolean;
 
  logout: () => void;
}

const initial_value = {
  user: null,
  setUser: () => {},
  isLoading: true,
  
  logout: () => {},
};

export const AuthContext = createContext<IContext>(initial_value);

//provder
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState(null);
  // const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchUser() {
        try {
          const data = await get_profile()
          console.log(data);
          
          setUser(data.data)
        
      }catch(error){
        console.log(error);
        setUser(null)
        
      }finally{
        setIsLoading(false)
      }
    }
      fetchUser()
  }, []);

  const logout = (cb = () => {}) => {
    localStorage.removeItem("user");
    setUser(null);
    cb();
  };
  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => {
  if (!AuthContext) {
    console.log("useAuth hook must used inside auth provider");
  }

  return useContext(AuthContext);
};
export default AuthProvider;
