
import { RxDashboard } from "react-icons/rx";
import { TbUsersGroup } from "react-icons/tb";
import { GoTasklist } from "react-icons/go";
import { TbBrandShopee } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";
import { TbBrandProducthunt } from "react-icons/tb";
import { Link, useLocation } from 'react-router';
const links = [
    {
        lable: 'Dashboard',
        link: '/admin',
        icon: <RxDashboard size={22} />
    },
    {

        lable: 'Brands',
        link: '/admin/brands',
        icon: <TbBrandShopee size={23} />
    },
    {
        lable: 'Category',
        link: '/admin/category',
        icon: <IoPricetagsOutline size={21} />
    },
    {
        lable: 'Products',
        link: '/admin/products',
        icon: <TbBrandProducthunt size={22} />
    },
    {
        lable: 'Users',
        link: '/admin/users',
        icon: <TbUsersGroup size={22} />
    },
    {
        lable: 'Orders',
        link: '/admin/orders',
        icon: <GoTasklist size={23} />
    }
]

const SidebarLinks = () => {

    const location = useLocation()
    const active_path = location.pathname

    return (
        <div className='flex flex-col gap-1'>
            {
                links.map(item => (
                    <Link
                        key={item.link}
                        to={item.link}
                        className={` text-violet-900 hover:text-white flex items-center gap-2 
                            p-2 rounded-md  hover:bg-violet-800 transition-all duration-300
                             ${active_path === item.link ? 'bg-violet-900 text-white' : ' bg-white'}`
                        }>
                        <div>
                            {item.icon}
                        </div>
                        <p className='text-lg font-semibold'>{item.lable}</p>
                    </Link>

                ))
            }
        </div>
    )
}

export default SidebarLinks
