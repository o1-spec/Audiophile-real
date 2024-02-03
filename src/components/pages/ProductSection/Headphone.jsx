/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { getProducts } from "../../helpers/apiProducts";
import { useLoaderData } from "react-router-dom";
import ProductDesc from "./ProductDesc";

function Headphone() {
  const { name } = useParams();
  const products = useLoaderData();
  let headPhones = products.products[0].Headproducts;
  const selectedProduct = headPhones.find((head) => head.name === name);

  return <ProductDesc selectedProduct={selectedProduct} />;
}

export async function loader() {
  const product = await getProducts();
  return product;
}

export default Headphone;
