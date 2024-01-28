import logo from "./images/lms-logo.png";
import locomoco from "./images/locomoco.png";
import coast from "./images/kauai-coast.png";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <section
        id="navbar"
        className="flex flex-row items-center justify-between py-3"
      >
        <div id="logo" className="flex-none">
          <img
            src={logo}
            alt="Loco Moco Security Conference Logo"
            className="h-9 flex-none"
          />
        </div>
        <div id="menu" className="flex flex-row justify-between">
          <div className="flex-initial">
            <a href="https://www.eventbrite.com/e/loco-moco-security-conference-tickets-803337172107">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1">
                Get tickets
              </button>
            </a>
          </div>
        </div>
      </section>
      <section id="fold">
        <img src={coast} alt="Kaua'i" />
      </section>
      <section id="hero" className="m-8">
        <img
          className="mx-auto h-98"
          src={locomoco}
          alt="Loco Moco Security Conference Logo"
        />
        <h1 className="text-6xl font-bold text-center">Security Conference</h1>
        <h2 className="text-3xl text-center p-3">July 17-18, 2024</h2>
        <h3 className="text-3xl text-center">
          Kalapaki Beach, Kaua'i, Hawai'i, USA
        </h3>
        <div id="tickets-cta" className="mt-3 text-center">
          <a href="https://www.eventbrite.com/e/loco-moco-security-conference-tickets-803337172107">
            <button className="mx-auto text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
              Get tickets
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
