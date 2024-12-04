import "./App.css";
import "./assets/css/globals.css";
import "./assets/css/animate.min.css";
import "./assets/css/fontawesome-all.min.css";
import "react-circular-progressbar/dist/styles.css";
import "swiper/css";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import ProgressScrolltop from "./components/ProgressScrolltop.jsx";
import Preloader from "./components/Preloader.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Education from "./components/Education.jsx";
// import Portfolio from "./components/Portfolio.jsx";
// import Team from "./components/Team.jsx";
import Pricing from "./components/Pricing.jsx";
// import Video from "./components/Video.jsx";
// import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

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
        <Header />
        <Home />
        <About />
        <Services />
        <Education />
        {/* <Portfolio /> */}
        {/* <Team /> */}
        <Pricing />
        {/* <Video /> */}
        {/* <Blog /> */}
        <Contact />
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
