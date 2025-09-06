
import SidebarLinks from './sidebar-links'


const Sidebar = () => {
  return (
      <div className='h-full w-full p-2'>
          {/* logo section */}
          <div className='flex gap-2 items-center justify-center'>
              <img src='/logo.svg' className='' />
              <div>
                  <p className='font-bold text-xl italic text-violet-900'>Shop Kart</p>
              </div>
          </div>

          {/* links section */}
          <div className='mt-6'>
              <SidebarLinks/>
          </div>
          
    </div>
  )
}

export default Sidebar
