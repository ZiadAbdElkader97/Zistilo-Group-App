import "./App.css";
import "./assets/css/globals.css";
import "./assets/css/animate.min.css";
import "./assets/css/fontawesome-all.min.css";
import "react-circular-progressbar/dist/styles.css";
import "swiper/css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import Preloader from "./components/Preloader.jsx";
import Home from "./components/Home.jsx";
import Navbars from "./components/Navbar.jsx";
import Ecommerce from "./pages/Ecommerce.jsx";
import Footer from "./components/Footer.jsx";
import ProgressScrolltop from "./components/ProgressScrolltop.jsx";

export default function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);
  return (
    <>
      <ParallaxProvider>
        <Preloader />
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Routes>
        <Footer />
        <ProgressScrolltop />
      </ParallaxProvider>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        outerStyle={{
          border: "1px solid var(--main_color)",
        }}
        innerStyle={{
          backgroundColor: "var(--main_color)",
        }}
        outerAlpha={0}
        innerScale={1}
        outerScale={1.4}
      />
    </>
  );
}
