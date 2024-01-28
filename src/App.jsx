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

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomeProducts />,
      },
      {
        path: "/Headphones",
        element: <HeadProducts />,
        loader: headLoader,
      },
      {
        path: "/Speakers",
        element: <SpeakerProducts />,
        loader: speakLoader,
      },
      {
        path: "/Earphones",
        element: <EarPhoneProduct />,
        loader: earLoader,
      },
      {
        path: "/Headphones/:name",
        element: <Headphone />,
        loader: headDescLoader,
      },
      {
        path: "/Speakers/:name",
        element: <Speaker />,
        loader: speakDescLoader,
      },
      {
        path: "/Earphones/:name",
        element: <Earphone />,
        loader: earDescLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
