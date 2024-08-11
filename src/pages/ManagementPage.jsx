import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../redux/slices/ProductsSlice";
import { Link } from "react-router-dom";
import { TrashIcon, PencilIcon } from "@heroicons/react/20/solid";
import swal from "sweetalert";

const ManagementPage = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    const handleDelete = async(id) => {
      const willDelete = await swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this file?",
        icon: "warning",
        dangerMode: true,
      });
       
      if (willDelete) {
        dispatch(deleteProduct(id));
        swal("Deleted!", "Your imaginary file has been deleted!", "success");
      }
    };
    return (
        <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-6">Product Management</h1>
      <div className="flex justify-end mb-4">
        <Link
          to="/admin/products/new"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
        >
          Create New Product
        </Link>
      </div>
      <table className="w-full border-collapse border border-slate-300">
        <thead>
          <tr>
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border p-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 object-cover"
                />
              </td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">€{product.price}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2 flex justify-around">
                <Link
                  to={`/admin/products/edit/${product._id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <PencilIcon className="h-5 w-5" />
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default ManagementPage;