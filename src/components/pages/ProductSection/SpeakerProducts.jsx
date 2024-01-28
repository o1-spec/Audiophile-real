/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../helpers/apiProducts";
import Products from "../products/Productdisplay";
import ProductDisplayTwo from "../products/productDisplaytwo";
import Shop from "../../ui/Shop";

function SpeakerProducts() {
  const products = useLoaderData();
  let speakers = products[2].speakproducts;
  //console.log(speakers);

  return (
    <>
      <div className="main-head">
        <div className="product-hero">
          <div className="product-hero-name">
            <h4 className="prod-name">Speakers</h4>
          </div>
        </div>
      </div>
      <div className="display-section">
        <div className="product-container">
          {speakers.map((speaker) =>
            speaker.id === 2 ? (
              <ProductDisplayTwo product={speaker} key={speaker.id} />
            ) : (
              <Products product={speaker} key={speaker.id} />
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

export default SpeakerProducts;
