import Header from "./Header.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Education from "./Education.jsx";
import Portfolio from "./Portfolio.jsx";
// import Team from "./Team.jsx";
import Video from "./Video.jsx";
import Blog from "./Blog.jsx";
import Contact from "./Contact.jsx";
import FAQ from "./FAQ.jsx";
import Careers from "./Careers.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Education />
      <Portfolio />
      {/* <Team /> */}
      <Video />
      <Blog />
      <Careers />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
