import { Outlet, useNavigation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import AudioInfo from "./AudioInfo";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="app-layout">
      {isLoading && <Loader />}
      <div className="main-head">
        <Nav />
      </div>
      <Outlet />
      <AudioInfo />
      <Footer />
    </div>
  );
}

export default AppLayout;
