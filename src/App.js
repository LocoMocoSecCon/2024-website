import "./App.css";

import Fold from "./components/Fold.js";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar.js";
import Hero from "./components/Hero.js";
import Schedule from "./components/Schedule.js";

function App() {
  return (
    <div>
      <div className="container mx-auto">
        <NavBar />
        <Fold />
        <Hero />
        <hr className="max-w-80 mx-auto"></hr>
        <section id="schedule">
          <h2 className="m-3 mx-auto text-center font-bold text-3xl">
            Conference Schedule
          </h2>
          <Schedule />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
