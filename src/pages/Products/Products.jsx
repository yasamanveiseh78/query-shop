import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/products/ProductCard/ProductCard";
import CategoryButtons from "../../components/products/CategoryButtons/CategoryButtons";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return <h2 className="my-4 text-center">Loading...</h2>;
  }

  if (isError) {
    return <h2 className="my-4 text-center">{error.message}</h2>;
  }

  const filteredProducts =
    selectedCategory === "all"
      ? data
      : data.filter((product) => product.category === selectedCategory);

 return (
  <div className="mx-auto max-w-306 px-4 sm:px-6 lg:px-8 lg:pb-8">
    <section
      id="product-list-container"
      className="mt-8 flex flex-col-reverse items-start justify-between gap-6 lg:flex-row"
    >
      <div
        id="product-list"
        className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-4/5 xl:grid-cols-3"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <CategoryButtons
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </section>
  </div>
);
}

export default Products;
