import { Link } from "react-router-dom";

const FeaturedProducts = ({ products }) => {
  return (
    <div className=" bg-white py-8 mt-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 bg-cover bg-center"
              />
              <div className="p-2">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-700 mb-2">€{product.price.toFixed(2)}</p>
                <Link to={`/productsDetails/${product._id}`}>
                <button className=" underline text-indigo-600">
                  View Details
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
