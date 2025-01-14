import Category from "./components/Category";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LocationFaq from "./components/LocationFaq";
import Navbar from "./components/Navbar";
import Offered from "./components/Offered";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Offered />
      <Category />
      <WhyChooseUs />
      <Testimonial />
      <LocationFaq />
      <Footer />
    </>
  );
};

export default App;
