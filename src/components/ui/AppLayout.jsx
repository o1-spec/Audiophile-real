import { Outlet, useNavigation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import AudioInfo from "./AudioInfo";
import Loader from "./Loader";
import { useState } from "react";

function AppLayout() {
  const [cartBar, setCartBar] = useState(false);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const toggleCart = () => {
    setCartBar((prevCartBar) => !prevCartBar);
  };

  return (
    <>
      <div onClick={()=> toggleCart()} className={cartBar ? "overlay" : null}></div>
      <div className="app-layout">
        {isLoading && <Loader />}
        <div className="main-head">
          <Nav cartBar={cartBar} setCartBar={setCartBar} toggleCart={toggleCart}/>
        </div>
        <Outlet />
        <AudioInfo />
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
