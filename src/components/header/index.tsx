
import IconSection from "./icons";
import { NavLinks } from "./nav-links";


const Header = () => {
  return (
    <div className="flex w-full justify-between items-center px-36 ">
        {/* logo */}
        <div className="w-[120px] h-12 ">
            <img src="./src/assets/logo.png"
             alt="logo" 
             className="-mt-7"/>

        </div>
        {/* nav links */}
        <NavLinks/>
        
        {/* icon section */}
        <IconSection/> 
    </div>
  )
}





export default Header