import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Navbarr from "../Navbar/Navbarr";
import Footer from "../Footer/Footer";
import Contact from "../Contact Us/Contact";

let heroSection = {
  backgroundImage:
    'url("https://png.pngtree.com/background/20210711/original/pngtree-may-day-labor-day-farmers-uncle-poster-poster-banner-picture-image_1070054.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  Height: "100vh",
  width: "100%",
};

const Home = () => {
  return (
    <>
      <Navbarr />
      <div style={heroSection}>
        <Hero />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
