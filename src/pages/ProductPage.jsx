import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/productCard/ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "../redux/slices/ProductsSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchProducts(searchTerm));
  }, [dispatch, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mt-28">
      <h2 className="text-3xl font-bold text-gray-500 text-center mb-4">
        All Products
      </h2>
      <div className="flex justify-center">
        <input
          type="text"
          className="p-2 w-60 border border-gray-300 rounded"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <ProductCard products={products} />
    </div>
  );
};

export default ProductPage;
