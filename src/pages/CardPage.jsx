import { useDispatch, useSelector } from "react-redux";
import { TrashIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../redux/slices/CartSlice";
import swal from "sweetalert";

const CardPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleRemove = async (id) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this file?",
      icon: "warning",
      dangerMode: true,
    });

    if (willDelete) {
      dispatch(removeFromCart(id));
      swal("Deleted!", "Your imaginary file has been deleted!", "success");
    }
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4 mt-28">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cart.length > 0 ? (
        <div>
          <table className="w-full mb-4">
            <thead>
              <tr>
                <th className="border p-2">Product</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Total</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">${item.price}</td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                      min="1"
                      max={item.stock}
                      className="border p-1 rounded-lg"
                    />
                  </td>
                  <td className="border p-2">${total.toFixed(2)}</td>
                  <td className="border p-2 flex justify-center">
                    <button onClick={() => handleRemove(item.id)} className="">
                      <TrashIcon className="size-6 text-red-500 h-8" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right">
            <p className="text-xl mb-6 font-bold">Total: ${total.toFixed(2)}</p>
            <Link
              to="/checkout"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CardPage;
