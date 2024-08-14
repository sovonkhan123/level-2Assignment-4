import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/productCard/ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "../redux/slices/ProductsSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]); // Example price range
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const queryParams = {
      searchTerm,
      categoryFilter,
      priceRange,
      sortOrder,
    };
    dispatch(fetchProducts(queryParams));
  }, [dispatch, searchTerm, categoryFilter, priceRange, sortOrder]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handlePriceChange = (e, type) => {
    const newRange = [...priceRange];
    if (type === "min") {
      newRange[0] = e.target.value;
    } else {
      newRange[1] = e.target.value;
    }
    setPriceRange(newRange);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("");
    setPriceRange([0, 1000]);
    setSortOrder("");
  };

  return (
    <div className="mt-28">
      <h2 className="text-3xl font-bold text-gray-500 text-center mb-4">
        All Products
      </h2>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="p-2 w-60 border border-gray-300 rounded mr-2"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          className="p-2 border border-gray-300 rounded mr-2"
          value={categoryFilter}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="tents">Tents</option>
          <option value="sleeping-bags">Sleeping Bags</option>
          <option value="backpacks">Backpacks</option>
        </select>
        <div className="flex border">
          <div className="flex justify-center items-center">
            <input
              type="number"
              className="p-2 w-20 h-3/4 border border-gray-300 rounded ml-2"
              placeholder="Min Price"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, "min")}
            />
          </div>
          <div className="flex items-center">
            <p className="text-center mx-2">To</p>
          </div>
          <div className="flex justify-center items-center">
          <input
            type="number"
            className="p-2 w-20 h-3/4 border border-gray-300 rounded mr-2 "
            placeholder="Max Price"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, "max")}
          />
          </div>
        </div>
        <select
          className="p-2 border border-gray-300 rounded mx-2"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="">Sort By</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
        <button
          onClick={handleClearFilters}
          className="bg-red-500 text-white p-2 rounded"
        >
          Clear
        </button>
      </div>

      <ProductCard products={products} />
    </div>
  );
};

export default ProductPage;
