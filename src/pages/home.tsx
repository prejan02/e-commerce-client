
// import BestSellingProducts from "../components/Landing/best-selling";
import CategoryList from "../components/Landing/category";
import FeatutedProducts from "../components/Landing/featured-product";
import Hero from "../components/Landing/hero";

const HomePage = () => {
  return (
    <div className="min-h-screen border">
      {/* nav bar */}
      {/* content section */}
      <Hero />
      <div className="px-36 py-10 flex flex-col gap-10">
        <CategoryList />
        <FeatutedProducts />
        {/* <BestSellingProducts /> */}
      </div>
      {/* footer */}
    </div>
  );
};

export default HomePage;
