
import { useQuery } from '@tanstack/react-query'
import ComponentTitle from '../common/title-component'
import ProductCard from '../product/card'
import { getFeaturedProducts } from '../../api/product.api'

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
        {!isLoading && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-x-6 gap-y-10'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
    </div>}
    </div>
  )
}

export default FeatutedProducts
