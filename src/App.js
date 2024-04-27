import "./App.css";

import Fold from "./components/Fold.js";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar.js";
import Hero from "./components/Hero.js";
import Sessions from "./components/Sessions.js";
import SpeakerWall from "./components/SpeakerWall.js";

function App() {
  return (
    <div>
      <div className="container mx-auto">
        <NavBar />
        <Fold />
        <Hero />
        <hr className="max-w-80 mx-auto"></hr>
        <section id="speakers">
          <h2 className="m-3 mx-auto text-center font-bold text-3xl">
            Top Industry Speakers
          </h2>
        </section>
        <SpeakerWall />
      </div>
      <Footer />
    </div>
  );
}

export default App;
