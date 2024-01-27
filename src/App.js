import logo from "./images/loco-moco-large.png";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <img
        className="logo mx-auto h-98"
        src={logo}
        alt="Loco Moco Security Conference Logo"
      />
      <h1 className="text-6xl text-center">Security Conference</h1>
      <h2 className="text-3xl text-center p-3">July 17-18, 2024</h2>
      <h3 className="text-1xl text-center">
        Kalapaki Beach, Kaua'i, Hawai'i, USA
      </h3>
    </div>
  );
}

export default App;
