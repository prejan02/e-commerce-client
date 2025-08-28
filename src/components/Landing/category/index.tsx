


import { useQuery } from '@tanstack/react-query'
import ComponentTitle from '../../common/title-component'
import CategoryCard from './card'
import type { ICategoryResponse } from '../../../types/category.types'
import { getAllCategory } from '../../../api/category.api'

const CategoryList = () => {

    const { data, isLoading } = useQuery({
        queryFn: getAllCategory,
        queryKey: ['get_all_category']
    })




    return (
        <div className=''>
            <ComponentTitle
                title='Our featured Categories'
                sub_title='Explore products by categories'
            />

            {/* loading */}
            <div>
                {
                    isLoading && <div className='flex justify-center items-center w-full h-full mt-6 min-h-[100px]'>
                        <p className='text-[16px] text-gray-700 text-center w-fit'>Loading...</p>
                    </div>
                }
                {/* render category */}
                {!isLoading && data?.data.length > 0 && <div className=' mt-6 grid  grid-cols-4  gap-5'>
                    {
                        data?.data.map((category: ICategoryResponse) => <CategoryCard category={category} />)
                    }
                </div>
                }
                {/* empty category */}
                {!isLoading && data?.data.length === 0 &&
                    <div className='flex justify-center items-center w-full h-full mt-6 min-h-[100px]'>
                        <p className='text-[16px] text-gray-700 text-center w-fit'>No Categories Found</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default CategoryList
