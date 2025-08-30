import ComponentTitle from '../components/common/title-component'
import  { withAuth } from '../components/hoc/with-auth.hoc'
import Wishlist from '../components/wishlist/list'
import { Role } from '../types/enum'

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

const Page =  withAuth(WishlistPage,[Role.USER])
export default Page