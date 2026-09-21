import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-90px)] items-center justify-center px-4">
      <div className="w-full max-w-120 rounded-2xl border border-[#e6ddd4] bg-[#fffaf5] p-8 text-center shadow-[0_8px_24px_rgba(75,63,56,0.12)]">
        <div className="mb-4 text-6xl font-bold text-[#c23a5c]">
          404
        </div>

        <h1 className="mb-3 text-2xl font-bold text-[#234a33]">
          Page Not Found
        </h1>

        <p className="mb-6 text-[#4b3f38]">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block rounded-[10px] bg-[#366648] px-6 py-3 font-medium text-[#fffaf5] transition hover:bg-[#d9486b]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;