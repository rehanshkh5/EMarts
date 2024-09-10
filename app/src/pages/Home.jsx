import About from "../components/About/About";
import Carousel from "../components/Carousel/Carousel";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/Product/FeaturedProducts";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <FeaturedProducts />
      <About />
    </div>
  );
};

export default Home;
