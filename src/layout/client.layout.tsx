import { Outlet } from "react-router"
import Footer from "../components/footer/footer"
import Header from "../components/header"


const ClientLayout = () => {
  return (
    <main className='h-full w=full' >
        {/* header section */}
        <Header/>
        {/* page content section */}
        <div className="min-h-full">
        <Outlet/>

        </div>
        {/* footer section */}
        <Footer/>
    </main>
  )
}

export default ClientLayout