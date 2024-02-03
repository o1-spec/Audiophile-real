/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../helpers/apiProducts";
import Products from "../products/Productdisplay";
import ProductDisplayTwo from "../products/productDisplaytwo";
import Shop from "../../ui/Shop";

function HeadProducts() {
  const products = useLoaderData();
  let headPhones = products.products[0].Headproducts;

  return (
    <>
      <div className="main-head">
        <div className="product-hero">
          <div className="product-hero-name">
            <h4 className="prod-name">Headphones</h4>
          </div>
        </div>
      </div>
      <div className="display-section">
        <div className="product-container">
          {headPhones.map((head) =>
            head.id === 2 ? (
              <ProductDisplayTwo product={head} key={head.id} />
            ) : (
              <Products product={head} key={head.id} />
            )
          )}
        </div>
      </div>
      <Shop />
    </>
  );
}

export async function loader() {
  const product = await getProducts();
  return product;
}

export default HeadProducts;
