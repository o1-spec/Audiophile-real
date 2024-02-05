/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import HomeProducts from "./components/pages/ProductSection/HomeProducts";
import HeadProducts, {
  loader as headLoader,
} from "./components/pages/ProductSection/HeadProducts";
import SpeakerProducts, {
  loader as speakLoader,
} from "./components/pages/ProductSection/SpeakerProducts";
import EarPhoneProduct, {
  loader as earLoader,
} from "./components/pages/ProductSection/EarPhoneProduct";

import Headphone, {
  loader as headDescLoader,
} from "./components/pages/ProductSection/Headphone";
import Earphone, {
  loader as earDescLoader,
} from "./components/pages/ProductSection/Earphone";
import Speaker, {
  loader as speakDescLoader,
} from "./components/pages/ProductSection/Speaker";
import CheckoutPage from "./components/pages/products/CheckoutPage";
import Error from "./components/ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/", 
        element: <HomeProducts />,
      },
      {
        path: "/Headphones",
        element: <HeadProducts />,
        loader: headLoader,
        errorElement: <Error />,
      },
      {
        path: "/Speakers",
        element: <SpeakerProducts />,
        loader: speakLoader,
        errorElement: <Error />,
      },
      {
        path: "/Earphones",
        element: <EarPhoneProduct />,
        loader: earLoader,
        errorElement: <Error />,
      },
      {
        path: "/Headphones/:name",
        element: <Headphone />,
        loader: headDescLoader,
        errorElement: <Error />,
      },
      {
        path: "/Speakers/:name",
        element: <Speaker />,
        loader: speakDescLoader,
        errorElement: <Error />,
      },
      {
        path: "/Earphones/:name",
        element: <Earphone />,
        loader: earDescLoader,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/product/checkout",
    element: <CheckoutPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
