import ComponentTitle from '../components/common/title-component'
import Wishlist from '../components/wishlist/list'

const WishlistPage = () => {
  return (
    <main className='w-full h-full px-36 mt-3'>
        <ComponentTitle
        title='Wishlist-Saved for Later'
        sub_title='Items in your wishlist may sell out fast — grab them before they’re gone!'
        />
    {/* product list */}
    <div className='mt-10  mb-15'>
        <Wishlist/>

    </div>
    </main>
  )
}

export default WishlistPage