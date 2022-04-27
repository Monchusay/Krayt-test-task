import style from "./App.module.css";
import HeroSection from "./Main sections/Hero section/HeroSection";

const App = () => {
  return (
      <div className={style.App}>
        <section>
          <HeroSection />
        </section>
      </div>
  );
};

export default App;
