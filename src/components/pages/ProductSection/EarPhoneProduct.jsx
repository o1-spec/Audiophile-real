/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../helpers/apiProducts";
import Products from "../products/Productdisplay";
import ProductDisplayTwo from "../products/productDisplaytwo";
import Shop from "../../ui/Shop";

function EarPhoneProducts() {
  const products = useLoaderData();
  console.log(products);
  let earphones = products.products[1].earProducts;
  console.log(earphones);

  return (
    <> 
      <div className="main-head">
        <div className="product-hero">
          <div className="product-hero-name">
            <h4 className="prod-name">Earphones</h4>
          </div>
        </div>
      </div>
      <div className="display-section">
        <div className="product-container">
          {earphones.map((ear) =>
            ear.id === 2 ? (
              <ProductDisplayTwo product={ear} key={ear.id} />
            ) : (
              <Products product={ear} key={ear.id} />
            )
          )}
        </div>
      </div>
      <Shop/>
    </>
  );
}

export async function loader() {
  const product = await getProducts();
  return product;
}

export default EarPhoneProducts;
