import { Link, useLocation } from "react-router"

const links:{label:string,link:string}[] =[
    {
        label:'Home',
        link:'/'
    },
    {
        label:'Products',
        link:'/products'
    },
    {
        label:'About Us',
        link:'/about-us'
    },
    {
        label:'Contact Us',
        link:'/contact-us'
    },
    
]

export const NavLinks = () =>{
    const location = useLocation()
    const active_path = location.pathname
    return(
        <div className="flex gap-4" >
            {
                links.map((item,index) =>(
                    <Link className={` hover:text-violet-500 min-w-[80px] transition-all duration-300 ${active_path === item.link ? 'font-semibold text-violet-500':'text-gray-600'} `} key={`${item.link}-${index}`} to={item.link}>
                        <span  className="text-[18px] ">{item.label}</span>
                    </Link>
                ))
            }
            
        </div>
    )

} 