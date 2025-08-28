

const image =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s";

const ProductCard = () => {
  return (
    <div>
        {/* image section */}
        <img src= {image} alt="" className="object-cover" />
        {/* name */}
        <h2>Product Name</h2>

        {/* description */}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, doloribus aliquam corporis dolorum cumque dignissimos et possimus harum! Illum, aliquid.</p>
        {/* price */}
        <p>NPR 25,999</p>
        {/* button */}
        <div>
          {/* view details */}
          <button>View Details</button>

          {/* add to wishlist */}
          <button>Add to Cart</button>
        </div>

    </div>
  )
}

export default ProductCard