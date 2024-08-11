import { Button } from "antd";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  return (
    <section className="top-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            <img
              src={product.image}
              className="h-12 w-10 ml-4 border border-black"
            />
            <h3 className="text-gray-500 ml-4 mb-1 mt-2">{product.name}</h3>
            <div className="">
              <p className="text-zinc-500 ml-4 mb-2 text-2xl font-semibold">
                €{product.price}
              </p>
              <Button className="border border-cyan-500 ml-4">
                <Link to={`/productsDetails/${product._id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center"></div>
    </section>
  );
};

export default ProductCard;
