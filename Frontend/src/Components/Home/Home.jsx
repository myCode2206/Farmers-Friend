import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import FormPage from "../CONTACTUS/FormPage";

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
      <div style={heroSection}>
        <Hero />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <FormPage />
      </div>
    </>
  );
};

export default Home;
