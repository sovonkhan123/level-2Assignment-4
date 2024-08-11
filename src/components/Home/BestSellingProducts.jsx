
import { Link } from "react-router-dom";

const BestSellingProducts = ({ products }) => (
  <section className="py-8">
    <h2 className="text-4xl font-bold text-center mb-8">
      Best Selling Products
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product._id} className="bg-white p-4">
            <img
              src={product.image}
              className="w-full object-cover mb-4 rounded-md bg-cover bg-center"
            />
            <div className="flex justify-end">
              <button className="bg-orange-500 text-white px-2 py-1 font-medium">
                New arrival
              </button>
            </div>
            <img src={product.image} className="h-12 w-10 ml-4 border border-black" />
          <h3 className="text-gray-500 ml-4 mb-1 mt-2">{product.name}</h3>
          <p className="text-zinc-500 ml-4 mb-2 text-2xl font-semibold">€{product.price}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center">
    <Link to="/products" className="text-blue-500 hover:underline text-lg">
      View More
    </Link>
    </div>
  </section>
);

export default BestSellingProducts;
