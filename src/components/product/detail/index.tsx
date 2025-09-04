import React from 'react'
import type { IProduct } from '../../../types/product.types'
import ImageCarousel from './image.carousel'
import Detail from './detail'


interface IProps {
    product:IProduct
}

const DetailSection: React.FC<IProps> = ({ product }) => {
    console.log(product)
  return (
      <div className='grid grid-cols-5 gap-10 mt-10 px-20'>
          {/* image */}
          <div className=' max-h-[450px]  col-span-2'>    
            <ImageCarousel images={product?.images ?? []}/>
          </div>

          {/* detail */}
          <div className='col-span-3 '>
              <Detail product={product} />
            </div>
              
          
    </div>
  )
}

export default DetailSection