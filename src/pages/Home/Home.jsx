import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-90px)] max-w-306 items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <section className="w-full max-w-180 rounded-2xl border border-[#e6ddd4] bg-[#fffaf5] p-8 text-center shadow-[0_6px_20px_rgba(75,63,56,0.1)] sm:p-12">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#f5dfe5] text-5xl">
          🛍️
        </div>

        <h1 className="mb-4 text-3xl font-bold text-[#234a33] sm:text-4xl">
          Find the products you love
        </h1>

        <p className="mx-auto mb-7 max-w-xl leading-7 text-[#4b3f38]">
          Explore our products and easily add your favorites to your cart.
        </p>

        <Link
          to="/products"
          className="inline-block rounded-[10px] bg-[#366648] px-6 py-3 font-medium text-[#fffaf5] transition hover:bg-[#d9486b]"
        >
          Explore Products
        </Link>
      </section>
    </main>
  );
}

export default Home;