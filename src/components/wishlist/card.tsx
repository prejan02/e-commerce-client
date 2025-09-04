import { CiTrash } from "react-icons/ci";
import type { IProduct } from "../../types/product.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { add_to_wishlist } from "../../api/wishlist.api";
import toast from "react-hot-toast";


const image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s";

  interface IProps{
    wishlistItem:IProduct
  }

const WishlistCard:React.FC<IProps> = ({wishlistItem}) => {
  const query_client = useQueryClient()
  const {mutate,isPending} = useMutation({
    mutationFn:add_to_wishlist,
    onSuccess:(response)=>{
      query_client.invalidateQueries({queryKey:['get_WishList']})
      toast.success(response.message)
    },
    onError:(error)=>{
      toast.error(error.message)
    },
  })
  const remove_from_list = () =>{
    mutate(wishlistItem._id)
  }
  
  
  return (
    <div className="w-[min(300px,100%)] relative ">
      {/* remove from list button */}
      <div  onClick={remove_from_list} className="w-fit absolute top-2 right-3 cursor-pointer z-20">
            <CiTrash size={26} className="text-red-500"/>
        </div>
      {/* image section */}
      <div className=" p-8 border border-gray-300 rounded-md overflow-clip">
        <img src={wishlistItem?.cover_image?.path?? image} alt={wishlistItem.name?? ""} className="w-[250px]  aspect-square mx-auto h-full rounded-md object-cover transition-all duration-300 hover:scale-[1.07]  hover:grayscale-50" />
      </div>

      <div className="py-2 flex flex-col gap-2">
      {/* name */}
        <h2 className="line-clamp-1 font-bold text-violet-700 text-lg">{wishlistItem?.name?? 'Product Name'} </h2>

      {/* description */}
      <p className="line-clamp-3 text-sm text-gray-700">
        {wishlistItem?.description ?? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam
        minima, harum accusantium nihil ratione est iure enim, rem, fugit
        distinctio dignissimos doloremque modi error autem voluptatibus quasi
        voluptate. Nihil.`}
       
      </p>

      {/* price */}
      <div className="flex justify-between items-center">
        <p className="text-[16px] font-semibold text-gray-800">{wishlistItem?.price ?? '25.999'}</p>
      <p className={`text-[14px] font-semibold ${wishlistItem?.stock>5 ? 'text-green-500': 'text-red-500'}`}>{wishlistItem?.stock > 5 ? 'in stock' : 'out of stock'}</p>
      </div>
      </div>
      {/* buttons */}
      <div className="flex gap-2 mt-2">
        {/* view detail  */}
        <button className="cursor-pointer flex-1 bg-gray-800 text-white p-2 py-3 font-semibold rounded-md ">View Detail</button>
       
      </div>
    </div>
  );
};

export default WishlistCard;
