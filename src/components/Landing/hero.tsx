import hero_image from '../../assets/hero_image.webp'

const Hero = () => {
  return (
    <div className="relative h-[85vh] w-full">
        <div className="h-full" >
            <img src={hero_image}
             alt="hero image"
             className="h-full w-full" />

        </div>
        {/* overlay */}
        <div className='bg-black/30 h-full w-full absolute inset-0'> </div>

        <div className='absolute top-1/2 left-20 z-50'>
            <h1 className='text-5xl text-violet-700 font-bold'>Where Deals Meet Desires.</h1>
            <p className='text-lg text-white mt-6'>Curated collections, exclusive offers, and fast delivery - all in one seamless experience</p>
            <button className='mt-10 py-3 bg-violet-700 hover:bg-violet-800 text-white text-lg font-bold px-7 rounded-md cursor-pointer'>
                Shop Now
            </button>
        </div>

    </div>
  )
}

export default Hero