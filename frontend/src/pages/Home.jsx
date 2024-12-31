import HeroSection from "../components/HeroSection";

import ToDaysProducts from "../components/ToDaysProducts";
import CategoriesSection from "../components/CategoriesSection";
import ThisMonth from "../components/ThisMonth";
import BuyNow from "../components/BuyNow";
import OurProducts from "../components/OurProducts";
import Featured from "../components/Featured";

const Home = () => {
  const handleViewAllProducts = () => {
    console.log("View All Products button clicked");
  };

  return (
    <>
      <HeroSection />
      <ToDaysProducts />
      <CategoriesSection />
      <ThisMonth />
      <BuyNow />
      <OurProducts handleViewAllProducts={handleViewAllProducts} />
      <Featured />
    </>
  );
};

export default Home;
