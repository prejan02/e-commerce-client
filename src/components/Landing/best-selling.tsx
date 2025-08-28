
import ComponentTitle from '../common/title-component'
import ProductCard from '../product/card'

const BestSellingProducts = () => {
  return (
    <div className=' min-h-[500px]'>
        <ComponentTitle 
        title='Best Selling Products' 
        sub_title='Limited Stock – Shop Featured Favorites Today'
        link='#'
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-x-6 gap-y-10'>
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
        </div>
    </div>
  )
}

export default BestSellingProducts
