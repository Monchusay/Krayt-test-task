import style from "./App.module.css";
import HeroSection from "./Main sections/Hero section/HeroSection";
import OurSpacesSection from "./Main sections/Our Spaces section/OurSpacesSection";
import Whyfrispes from "./Main sections/Whyfrispes/Whyfrispes";

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
          <Whyfrispes/>
      </section>
    </div>
  );
};

export default App;
