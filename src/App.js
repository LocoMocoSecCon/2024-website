import "./App.css";

import Fold from "./components/Fold.js";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar.js";
import Hero from "./components/Hero.js";
import Speakers from "./components/Speakers";

function App() {
  return (
    <div>
      <div className="container mx-auto">
        <NavBar />
        <Fold />
        <Hero />
        <hr className="max-w-80 mx-auto"></hr>
        <Speakers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
