import React from 'react'
import type { IProduct } from '../../../types/product.types'
import { TiStarFullOutline } from "react-icons/ti";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { CiShoppingTag } from "react-icons/ci";
import { TbBrandApple } from "react-icons/tb";
import QuantityInput from '../../common/inputs/quantity-input';
import { useMutation } from '@tanstack/react-query';
import { add_to_cart } from '../../../api/cart.api';
import toast from 'react-hot-toast';
import { add_to_wishlist } from '../../../api/wishlist.api';
interface IProps {
    product: IProduct
}

const Detail: React.FC<IProps> = ({ product }) => {
    const [quantity, setQuantity] = React.useState(1)

    const { mutate: cart_mutate, isPending: is_cart_pending } = useMutation({
        mutationFn: add_to_cart,
        onSuccess: (response) => {
            toast.success(response.mssage ?? 'Product added to cart')
        },
        onError: (error) => {
            toast.error(error.message ?? 'Product added to cart')
        }
    })

    // add to wishlist mitation
    const { mutate: wishlist_mutate, isPending: is_wishlist_pending } = useMutation({
        mutationFn: add_to_wishlist,
        onSuccess: (response) => {
            toast.success(response.message)
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    const handle_wishlist_click = () => {
        wishlist_mutate(product._id)
    }


    // mutate cart
    const handle_cart_click = () => {
        cart_mutate({ quantity, productId: product._id })
    }

    return (
        <div className='px-5 flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold text-gray-600'>{product.name}</h1>
                <div className='flex gap-1 items-center'>
                    <span className='text-md text-gray-600 mt-1'>4.5</span>
                    <TiStarFullOutline size={22} className='text-yellow-400' />
                </div>
            </div>

            {/* price */}
            <div className='flex gap-3 '>
                <div className='flex items-center gap-2'>
                    <TbCurrencyRupeeNepalese className='text-violet-700' size={20} />
                    <span>{product.price}</span>
                </div>

                <div>
                    {
                        product.stock > 5 ? <span className='text-green-500'> In Stock</span> : <span className='text-red-500'>Out of Stock</span>
                    }
                </div>
            </div>

            {/* brand & category */}
            <div className='flex gap-2 items-center mt-2'>
                <div className='flex items-center gap-2 border border-violet-200 rounded-md p-1 px-2 bg-[#f8f8f8]'>
                    <CiShoppingTag className='text-violet-700' size={20} />
                    <span className='font-semibold text-sm'>{product.category?.name ?? 'Electronics'}</span>
                </div>

                <div className='flex items-center gap-2 border border-violet-200 rounded-md p-1 px-2 bg-[#f8f8f8]'>
                    <TbBrandApple className='text-violet-700' size={20} />
                    <span className='font-semibold text-sm'>Apple</span>
                </div>
            </div>
            {/* desc */}
            <div className='mt-5'>
                <p className='text-gray-600 text-[15px]'>{product.description}</p>
            </div>


            {/* quantity input */}
            <QuantityInput quantity={quantity} setQuantity={setQuantity} />


            {/* buttons */}
            <div className='flex w-full gap-4 mt-10'>
                {/* add to cart */}
                <button
                    onClick={handle_cart_click}
                    disabled={is_cart_pending || is_wishlist_pending}
                    className='disabled:bg-gray-600 disabled:cursor-not-allowed cursor-pointer w-full bg-gray-900 text-lg font-bold text-white p-3 rounded'

                >
                    {is_cart_pending ? "Adding...." : "Add to Cart"}
                </button>

                {/* add to wishlist */}
                <button
                    onClick={handle_wishlist_click}
                    disabled={is_cart_pending || is_wishlist_pending}
                    className='disabled:cursor-not-allowed cursor-pointer w-full bg-[#f8f8f8]  text-lg font-bold text-gray-900 border boder-gray-800 p-3 rounded'
                >
                    {is_wishlist_pending ? 'Adding' : 'Add to Wishlist'}
                </button>
            </div>



        </div>
    )
}

export default Detail