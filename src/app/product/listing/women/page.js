import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function WomenAllProducts() {
  const getAllProducts = await productByCategory("construction");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
