import { useQuery } from '@tanstack/react-query'
import WishlistCard from './card'
import { get_Wishlist } from '../../api/wishlist.api'
import type { IProduct } from '../../types/product.types'

const Wishlist = () => {

  const {data,isLoading} = useQuery({
    queryFn:get_Wishlist,
    queryKey:['get_WishList']
  })
  console.log(data);
  
  return (
    <div className="mt-6 pb-50">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div>
        {
          isLoading && <div className="flex justify-center items-center w-full h-full">
            <p className="text-[16px] text-gray-700">Loading wishlist...</p>
          </div>
        }
      </div>
      {!isLoading && data?.data?.map((item: IProduct) => (
        <WishlistCard
          key={item._id}
          wishlistItem={item}
        />
      ))}
      </div>
      </div>
  )
}

export default Wishlist