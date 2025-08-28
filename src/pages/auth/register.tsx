import { Link } from "react-router"
import RegisterForm from "../../components/forms/register.form"
 
const Register = () => {
  return (
    <main className= "min-h-full w-full flex justify-center items-center bg-white  py-4">
        <div className="h-auto w-[95%] sm:w-[420px] border border-violet-400 p-6 rounded-md bg-[#f8f8f8] shadow-lg">
          <h1 className="text-3xl font-bold text-violet-800 text-center">Sign Up</h1>
            <RegisterForm/>
            <div className="py-4">
            <p className="text-center">
              Already have an account? <Link to={'/login'}> <span className="text-violet-700">Sign In</span> </Link>
            </p>
          </div>
        </div>
    </main>
  )
}

export default Register