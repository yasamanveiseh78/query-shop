import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../services/productService";

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
};