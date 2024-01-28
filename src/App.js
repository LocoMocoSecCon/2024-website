import logo from "./images/loco-moco-large.png";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto mt-3">
      <img
        className="logo mx-auto h-98"
        src={logo}
        alt="Loco Moco Security Conference Logo"
      />
      <h1 className="text-6xl font-bold text-center">Security Conference</h1>
      <h2 className="text-3xl text-center p-3">July 17-18, 2024</h2>
      <h3 className="text-3xl text-center">
        Kalapaki Beach, Kaua'i, Hawai'i, USA
      </h3>
      <div id="tickets-cta" className="mt-9 text-center">
        <a href="https://www.eventbrite.com/e/loco-moco-security-conference-tickets-803337172107">
          <button className="mx-auto text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            Get tickets
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
