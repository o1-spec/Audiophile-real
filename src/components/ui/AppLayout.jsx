/* eslint-disable no-unused-vars */
import { Outlet, useNavigation } from "react-router-dom";
import Nav from "./Nav";
import { useEffect } from "react";
import Footer from "./Footer";
import AudioInfo from "./AudioInfo";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function AppLayout() {
  const location = useLocation();
  const [cartBar, setCartBar] = useState(false);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleCart = () => {
    setCartBar((prevCartBar) => !prevCartBar);
  };

  return (
    <>
      <div
        onClick={() => toggleCart()}
        className={cartBar ? "overlay" : null}
      ></div>
      <div className="app-layout">
        {isLoading && <Loader />}
        <div className="main-head">
          <Nav
            cartBar={cartBar}
            setCartBar={setCartBar}
            toggleCart={toggleCart}
          />
        </div>
        <Outlet />
        <AudioInfo />
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
