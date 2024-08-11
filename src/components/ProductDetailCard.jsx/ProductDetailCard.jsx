import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../../redux/slices/ProductsSlice";
import { addToCart } from "../../redux/slices/CartSlice";
import { toast, Toaster,  } from "sonner";

const ProductDetailCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentProduct: product } = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast('The product is successfully added to the cart')
  };

  const isInCart = cart.some((item) => item.id === product?.id);
  const isOutOfStock = product?.quantity <= 0;

  return (
    <div className="lg:flex md:flex justify-between mt-24">
      {product && (
        <>
          <div className="w-2/3 lg:w-1/2 flex justify-center">
            <img className="" src={product.image} alt={product.name} />
          </div>
          <div className="ml-6 mx-auto my-auto">
            <h1 className="text-5xl pb-3">{product.name}</h1>
            <h3 className="text-3xl text-slate-500 mt-4">€{product.price}</h3>
            <p className="text-slate-500 text-lg">
              Tax included |
              <span className="underline text-orange-500 mx-2">Shipping</span>
              calculated at checkout.
            </p>
            <p className="border-b-2 pb-4 mt-4 font-semibold text-neutral-600 text-lg">
              By
              <span className="underline text-orange-500 font-normal pl-2">
                Lowe Alpine
              </span>
            </p>
            <p className="mt-5 text-lg text-neutral-600 font-semibold">
              Color: <span className="text-slate-500 font-normal">{product.color}</span>
            </p>
            <img src={product.image} className="h-12 w-10 border border-black" />
            <p className="mt-3 text-xl font-semibold text-neutral-600">Size</p>
            <p className="border border-slate-900 w-fit p-3 text-lg text-slate-500">
              S | M
            </p>
            <p className="mt-4 text-xl font-semibold text-neutral-600">
              Available Quantity:{" "}
              <span className="text-slate-500 text-lg font-normal">
                {" "}
                {product.quantity}
              </span>
            </p>
            <Toaster position="top"/>
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 border border-black p-2 hover:bg-black hover:text-white"
              disabled={isInCart || isOutOfStock}
            >
              {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailCard;
