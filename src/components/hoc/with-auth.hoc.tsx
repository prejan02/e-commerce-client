import { type ComponentType } from "react"
import { useAuth } from "../../context/auth.context"
import { Navigate, useLocation } from "react-router"
import toast from "react-hot-toast"
import type { Role } from "../../types/enum"

export function withAuth<T>(Component:ComponentType<T>,roles:Role[]){
    return function ProtectedComponent (props:any){

        //authentication logic
        const {isLoading,user} = useAuth()
        const location = useLocation()

        if(isLoading){
            return <div>Loading</div>
        }
        if(!user){
            toast.error('You need to login first')
            return <Navigate to={'/login'}  replace={true} state={{from:location.pathname}} />
        }
        
        //role based
        if(roles && !roles.includes(user.role)){
            
            toast.error('Unauthorized.You can not access this route')
            return <Navigate to={'/login'}  replace={true} state={{from:location.pathname}} />
        }
        return <Component {...props} />
    }
}