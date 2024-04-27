import locomoco from "../images/locomoco.svg";

function Hero() {
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
    <div id="tickets-cta" className="m-6 text-center">
      <a
        href="https://www.eventbrite.com/e/loco-moco-security-conference-tickets-803337172107"
        rel="noreferrer noopener"
      >
        <button className="mx-auto text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 button-homepage">
          Get tickets
        </button>
      </a>

      <a
        href="https://book.passkey.com/event/50781006/owner/10862/landing"
        rel="noreferrer noopener"
        target="_blank"
      >
        <button className="mx-auto text-2xl bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 button-homepage">
          Book Hotel
        </button>
      </a>
    </div>
  </section>;
}

export default Hero;
