import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/slices/ProductsSlice";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !name ||
      !price ||
      !category ||
      !image ||
      !quantity ||
      !description ||
      !color
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new product object
    const newProduct = {
      id: Date.now(), // Temporarily using timestamp as an ID, typically you'd use a UUID or auto-increment ID from the backend.
      name,
      price: parseFloat(price),
      category,
      image,
      quantity: parseInt(quantity, 10),
      description,
      color,
    };

    // Dispatch the addProduct action to Redux
    dispatch(addProduct(newProduct));

    // Redirect to the product management page
    navigate("/admin/products");
  };
  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-6">Create New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium">Product Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Price (€)</label>
          <input
            type="number"
            className="w-full border p-2 rounded-lg"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Category</label>
          <input
            type="text"
            className="w-full border p-2 rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Image URL</label>
          <input
            type="text"
            className="w-full border p-2 rounded-lg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">
            Available Quantity
          </label>
          <input
            type="number"
            className="w-full border p-2 rounded-lg"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Color</label>
          <input
            type="text"
            className="w-full border p-2 rounded-lg"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Description</label>
          <textarea
            className="w-full border p-2 rounded-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
