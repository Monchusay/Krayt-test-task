import style from "./App.module.css";
import HeroSection from "./Main sections/Hero section/HeroSection";
import OurSpacesSection from "./Main sections/Our Spaces section/OurSpacesSection";

const App = () => {
  return (
    <div className={style.App}>
      <section>
        <HeroSection />
      </section>
      <section>
        <OurSpacesSection />
      </section>
    </div>
  );
};

export default App;
