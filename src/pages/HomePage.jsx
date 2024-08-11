import { useDispatch, useSelector } from "react-redux";
import BestSellingProducts from "../components/Home/BestSellingProducts";
import Hero from "../components/Home/Hero";
import ProductCatagories from "../components/Home/ProductCatagories";
import { useEffect } from "react";
import { fetchProducts } from "../redux/slices/ProductsSlice";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import FAQ from "../components/Home/FAQ";
import Testimonial from "../components/Home/Testimonial";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  console.log(products)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <BestSellingProducts products={products.slice(0,4)}/>
      <ProductCatagories />
      <FeaturedProducts products={products.slice(9,13)} />
      <Testimonial/>
      <FAQ/>
    </div>
  );
};

export default HomePage;
