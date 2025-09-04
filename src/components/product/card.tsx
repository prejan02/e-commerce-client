import type { IProduct } from "../../types/product.types";
import { Link } from "react-router";

import { useMutation } from "@tanstack/react-query";
import { add_to_wishlist } from "../../api/wishlist.api";
import toast from "react-hot-toast";

const image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s";

interface IProps {
  product:IProduct
}

const ProductCard:React.FC<IProps> = ({product}) => {
  const {mutate,isPending} = useMutation({
    mutationFn:add_to_wishlist,
    onSuccess:(response)=>{
      toast.success(response.message)
    },
    onError:(error)=>{
      toast.error(error.message)
    },
  })
  const addToList =()=>{
    mutate(product._id)
  }
  console.log(product);
  
  return (
    <div className="w-[min(300px,100%)] ">
      {/* image section */}
      <div className=" p-8 border border-gray-300 rounded-md overflow-clip">
        <img src={product?.cover_image?.path?? image} alt={product.name?? ""} className="w-[250px]  aspect-square mx-auto h-full rounded-md object-cover transition-all duration-300 hover:scale-[1.07]  hover:grayscale-50" />
      </div>

      <div className="py-2 flex flex-col gap-2">
      {/* name */}
        <h2 className="line-clamp-1 font-bold text-violet-700 text-lg">{product?.name?? 'Product Name'} </h2>

      {/* description */}
      <p className="line-clamp-3 text-sm text-gray-700">
        {product?.description ?? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam
        minima, harum accusantium nihil ratione est iure enim, rem, fugit
        distinctio dignissimos doloremque modi error autem voluptatibus quasi
        voluptate. Nihil.`}
        
      </p>

      {/* price */}
      <div className="flex justify-between items-center">
        <p className="text-[16px] font-semibold text-gray-800">{product?.price ?? '25.999'}</p>
      <p className={`text-[14px] font-semibold ${product?.stock>5 ? 'text-green-500': 'text-red-500'}`}>{product?.stock > 5 ? 'in stock' : 'out of stock'}</p>
      </div>
      </div>
      {/* buttons */}
      <div className="flex gap-2 mt-2">
        {/* view detail  */}
        <Link to = {`/product/${product?._id}?name=${product?.name}`}>
        <button className="cursor-pointer flex-1 bg-gray-800 text-white p-2 py-3 font-semibold rounded-md ">View Detail</button>
        </Link>
        {/* add to wishlist */}
        <button onClick={addToList} disabled={isPending}  className="disabled:cursor-not-allowed cursor-pointer flex-1 text-gray-800 border border-gray-800 font-semibold p-2 rounded-md">{isPending ? 'Adding to List...': 'Add to Wishlist'}</button>

      </div>
    </div>
  );
};

export default ProductCard;
