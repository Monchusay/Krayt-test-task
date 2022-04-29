import style from "./App.module.css";
import HeroSection from "./Main sections/Hero section/HeroSection";
import OurSpacesSection from "./Main sections/Our Spaces section/OurSpacesSection";
import Whyfrispes from "./Main sections/Whyfrispes/Whyfrispes";
import FacilitiesSection from "./Main sections/Facilities section/FacilitiesSection";
import GallerySection from "./Main sections/Gallery section/GallerySection";
import UseFrispesSection from "./Main sections/Use Fispes section/UseFrispesSection";
import CustomerReviewsSection from "./Main sections/Customer reviews section/CustomerReviewsSection";
import FAQSection from "./Main sections/FAQ section/FAQSection";
import NewsInsightsSection from "./Main sections/NewsInsightsSection/NewsInsightsSection";
import Footer from "./Main sections/Footer/Footer";

// Решил писать используя реакт-компоненты, надеюсь вы не против.
// Буду очень рад получить любой фидбэк, независимо от решения, принятого в пользу другого кандидата.
// Спасибо за уделенное время.

const App = () => {
  return (
    <div className={style.App}>
      <section>
        <HeroSection />
      </section>
      <section>
        <OurSpacesSection />
      </section>
      <section>
        <Whyfrispes />
      </section>
      <section>
        <FacilitiesSection />
      </section>
      <section>
        <GallerySection />
      </section>
      <section>
        <UseFrispesSection />
      </section>
      <section>
        <CustomerReviewsSection />
      </section>
      <section>
        <FAQSection />
      </section>
      <section>
        <NewsInsightsSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
