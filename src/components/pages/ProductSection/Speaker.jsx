/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { getProducts } from "../../helpers/apiProducts";
import { useLoaderData } from "react-router-dom";
import ProductDesc from "./ProductDesc";

function Speaker() {
  const { name } = useParams();
  const products = useLoaderData();
  let speakers = products[2].speakproducts;
  const selectedProduct = speakers.find((head) => head.name === name);

  return <ProductDesc selectedProduct={selectedProduct} />;
}

export async function loader() {
  const product = await getProducts();
  return product;
}

export default Speaker;
