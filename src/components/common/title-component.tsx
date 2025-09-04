import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router";

interface IProps{
    title:string;
    sub_title:string;
    link?:string
}
const ComponentTitle:React.FC<IProps> = ({title,sub_title,link}) => {
  return (
    <div className="w-full ">
        <div className="flex w-full justify-between mb-1">
            <h1 className="text-violet-500 text-3xl font-bold">{title}</h1>
            {link && <Link to={link} className="flex items-center">
                <p className="text-[14px] text-gray-600">Explore All</p>
                {/* icon */}
                <IoChevronDownOutline className="text-gray-600"/>
            </Link>}
        </div>
        <div>
            <p className="text-[16px] text-gray-600 max-w-[600px]">{sub_title}</p>
        </div>
    </div>
  )
}

export default ComponentTitle