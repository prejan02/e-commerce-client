import Footer from "../components/footer/footer";
import Header from "../components/header";
import FeaturedProducts from "../components/Landing/featured-product";
import Hero from "../components/Landing/hero";

const HomePage = () => {
  return (
    <div className="min-h-screen border">
      {/* nav bar */}
      <Header />
      {/* content section */}
      <Hero />
      <div className="px-36">
        <FeaturedProducts />
      </div>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default HomePage;
