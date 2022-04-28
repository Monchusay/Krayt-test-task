import style from "./App.module.css";
import HeroSection from "./Main sections/Hero section/HeroSection";
import OurSpacesSection from "./Main sections/Our Spaces section/OurSpacesSection";
import Whyfrispes from "./Main sections/Whyfrispes/Whyfrispes";
import FacilitiesSection from "./Main sections/Facilities section/FacilitiesSection";
import GallerySection from "./Main sections/Gallery section/GallerySection";
import UseFrispesSection from "./Main sections/Use Fispes section/UseFrispesSection";

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
    </div>
  );
};

export default App;
