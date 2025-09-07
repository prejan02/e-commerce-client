

interface IProps{
    count:number
    label:string
}

const CountCard:React.FC<IProps> = ({count,label}) => {
  return (
    <div className="rounded-md shadow border border-dashed bg-violet-50 border-violet-500 p-4 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-gray-700">
            {label}
        </h1>
        <span className="w-full text-end text-xl font-bold text-violet-800">{count} </span>
    </div>
  )
}

export default CountCard