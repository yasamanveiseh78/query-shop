import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import Loader from "../../components/Common/Loader/Loader";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useProduct(id);

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <h2 className="my-8 text-center">{error.message}</h2>;
  }

  return (
    <div className="mx-auto max-w-250 px-4 py-8 sm:px-6">
      <Link
        to="/products"
        className="mb-6 inline-block rounded-lg bg-[#366648] px-4 py-2 text-sm font-medium text-[#fffaf5] transition hover:bg-[#d9486b]"
      >
        Back to Products
      </Link>
      <div className="grid gap-8 rounded-xl border border-[#e6ddd4] bg-[#fffaf5] p-6 shadow-[0_4px_14px_rgba(75,63,56,0.1)] md:grid-cols-2">
        <div className="flex h-100 items-center justify-center rounded-lg bg-[#f7f3ed] p-8">
          <img
            src={data.image}
            alt={data.title}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-2 text-sm capitalize text-[#4b3f38]">
            {data.category}
          </p>

          <h1 className="mb-4 text-2xl font-bold text-[#234a33]">
            {data.title}
          </h1>

          <p className="mb-5 text-2xl font-bold text-[#c23a5c]">
            ${data.price}
          </p>

          <p className="mb-6 leading-7 text-[#4b3f38]">{data.description}</p>

          <button
            type="button"
            onClick={() => dispatch(addToCart(data))}
            className="w-fit rounded-[10px] bg-[#366648] px-5 py-2.5 text-base font-medium text-[#fffaf5] transition hover:bg-[#d9486b]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
