import { Link } from "react-router"
import Loginform from "../../components/forms/login.form"


const Login = () => {
  return (
    <main className="h-full w-full flex justify-center items-center bg-white  py-4 ">

        <div className="min-h-[400px] w-[min(500px,100%)] sm:w-[420px] border border-violet-400 p-6 rounded-md bg-[#f8f8f8] shadow-lg">
          <h1 className="text-3xl font-bold text-violet-800 text-center">Login</h1>

          {/* form */}
            {/* inpit field */}
            <Loginform/>


          <div className="py-4">
            <p className="text-center">
              Don&apos;t have an account? <Link to={'/register'}> <span className="text-violet-700">Sign Up</span></Link>
            </p>
          </div>
        </div>
    </main>
  )
}

export default Login