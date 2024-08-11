import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

const ProductUpdate = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    quantity: "",
    description: "",
    color: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch product details
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/${id}`
        );
        setProductData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Product not found or failed to load");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const willDelete = await swal({
        title: "Are you sure?",
        text: "Are you sure that you want to update this product?",
        icon: "",
        dangerMode: true,
      });
       
      if (willDelete) {
        try {
            await axios.put(`http://localhost:3000/api/products/${id}`, productData);
            navigate('/productManagement')
          } catch (err) {
            setError("Failed to update product");
          }
        swal("Success", "Your imaginary file has been Updated!", "success");
      }

    
  };
  return (
    <div className="container mx-auto mt-16 p-4">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Update Product</h2>

          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              value={productData.image}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={productData.quantity}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Color</label>
            <input
              type="text"
              name="color"
              value={productData.color}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Update Product
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProductUpdate;
