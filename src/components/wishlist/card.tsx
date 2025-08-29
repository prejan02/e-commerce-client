import { CiTrash } from "react-icons/ci";


const image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s";

const WishlistCard = () => {
  return (
    <div className="w-[min(300px,100%)] relative ">

        {/* remove form list button */}
        <div className="w-fit absolute top-2 right-3 cursor-pointer z-20">
            <CiTrash size={26} className="text-red-500"/>
        </div>
        
      {/* image section */}
      <div className=" p-8 border border-gray-300 rounded-md overflow-clip">
        <img src={image} alt={""} className="w-[250px]  aspect-square mx-auto h-full rounded-md object-cover transition-all duration-300 hover:scale-[1.07]  hover:grayscale-50" />
      </div>

      <div className="py-2 flex flex-col gap-2">
      {/* name */}
        <h2 className="line-clamp-1 font-bold text-violet-700 text-lg">Product Name</h2>

      {/* description */}
      <p className="line-clamp-2 text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam
        minima, harum accusantium nihil ratione est iure enim, rem, fugit
        distinctio dignissimos doloremque modi error autem voluptatibus quasi
        voluptate. Nihil.
      </p>

      {/* price */}
      <p className="text-[16px] font-semibold text-gray-800">NPR. 25,999</p>
      </div>
      {/* buttons */}
      <div className="flex gap-2 mt-2">
        {/* view detail  */}
        <button className="flex-1 bg-gray-800 text-white p-2 py-3 font-semibold rounded-md ">View Detail</button>
       
      </div>
    </div>
  );
};

export default WishlistCard;