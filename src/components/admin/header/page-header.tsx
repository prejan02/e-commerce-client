import { RiAddLine } from 'react-icons/ri'
import { Link } from 'react-router'

interface IProps{
    title:string,
    sub_title?:string
    button_text?:string
    link_to?:string
}

const PageHeader:React.FC<IProps> = ({title,sub_title,button_text,link_to}) => {
  return (
   <div className="flex justify-between items-center border border-gray-300 p-3 rounded-md shadow">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-gray-700"> {title}</h1>
          <p className="ml-1 text-[15px] text-gray-600">
            {sub_title}
          </p>
        </div>
        {/* button */}
       {button_text && link_to && <Link to={link_to}
        className="flex items-center gap-1 text-white bg-violet-900 p-2 px-4 rounded-lg"
        >
            <RiAddLine size={28}/>
            <p className="font-bold text-[17px]">{button_text} </p>
        </Link>}
      </div>
  )
}

export default PageHeader