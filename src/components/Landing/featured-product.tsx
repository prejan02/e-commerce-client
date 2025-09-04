
import { useQuery } from '@tanstack/react-query'
import ComponentTitle from '../common/title-component'
import { getFeaturedProducts } from '../../api/product.api'
import ProductCard from '../product/card'
import type { IProduct } from '../../types/product.types'

const FeatutedProducts = () => {

  //useQuery
  const {data,isLoading} = useQuery({
    queryFn:getFeaturedProducts,
    queryKey:['featured_products']
  })

  console.log(data, isLoading)
  
  return (
    <div className=' min-h-[500px] tracking-wider'>
        <ComponentTitle 
        title='Featured Products' 
        sub_title='Limited Stock – Shop Featured Favorites Today'
        link='#'
        />
        {
        isLoading && <div className='min-h-40 flex justify-center items-center'>

          <p className='text-xl text-violet-700'>Loading....</p>


        </div>
      }
        {!isLoading && data?.data && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-6 gap-x-6 gap-y-10'>
          {
            data?.data?.map((product:IProduct)=> <ProductCard key={product._id} product={product} />)
          }
          
    </div>}
    </div>
  )
}

export default FeatutedProducts
