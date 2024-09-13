import { Outlet, useLocation } from "react-router-dom";
import "../../App.css";
import Body from "./Body";
import Header from "./Header";
import "./Header.css";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { ScrollRestoration } from "react-router-dom";

function Home() {
  const [nvbar, setNvbar] = useState("");
  const loaction = useLocation();

  useEffect(() => {
    let path = location.pathname;
    if (path === "/") {
      setNvbar("navbar");
    } else if (path === "/contactus") {
      setNvbar("navbar active");
    }

    const changeBackgroundNavbar = () => {
      if (window.scrollY >= 80) {
        setNvbar("navbar active");
      } else {
        if (path === "/") {
          setNvbar("navbar");
        } else if (path === "/contactus") {
          setNvbar("navbar active");
        }
      }
    };
    window.addEventListener("scroll", changeBackgroundNavbar);

    return () => {
      window.removeEventListener("scroll", changeBackgroundNavbar);
    };
  }, [location.pathname]);

  return (
    <>
      <div style={{ position: "relative" }}>
        <Header className={nvbar} />
        <Outlet />
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
}
export default Home;
