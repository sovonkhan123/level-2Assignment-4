import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.paymentMethod === "cod") {
      const willOrder = await swal({
        title: "Are you sure?",
        text: "Are you sure that you want to order the product?",
        icon: "",
        buttons: true,
      });

      if (willOrder) {
        // Send order to the backend
        const orderDetails = {
          ...formData,
          cartItems: cart,
        };

        try {
          const response = await fetch(
            "https://campers-shop-backend-dun.vercel.app/api/orders",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(orderDetails),
            }
          );

          if (response.ok) {
            swal("Succeed", "Successfully ordered the product", "success");
            // Clear form and cart after successful order
            setFormData({
              name: "",
              email: "",
              phone: "",
              address: "",
              paymentMethod: "cod",
            });
            navigate("/");
          } else {
            swal(
              "Error",
              "Failed to place the order. Please try again.",
              "error"
            );
          }
        } catch (error) {
          swal(
            "Error",
            "Failed to place the order. Please try again.",
            "error"
          );
        }
      }
    } else {
      alert("Stripe payment integration is required.");
    }
  };

  return (
    <div className="container mx-auto p-4 mt-20 grid justify-center bg-gray-300 w-3/4 rounded-xl">
      <h1 className="text-3xl font-bold mb-4 text-center">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-96">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            required
          >
            <option value="cod">Cash on Delivery</option>
            <option value="stripe">Stripe</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
