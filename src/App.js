import logo from "./images/lms-logo.svg";
import locomoco from "./images/locomoco.svg";
import coast960w from "./images/kauai-coast-960w.webp";
import coast480w from "./images/kauai-coast-480w.webp";
import coast240w from "./images/kauai-coast-240w.webp";
import "./App.css";
import speakers from "./speakers";

function App() {
  return (
    <div>
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
          <div id="menu" className="flex flex-row justify-between items-center">
            <div className="px-3">
              <a
                className="font-semibold"
                href="#speakers"
                rel="noreferrer noopener"
              >
                Speakers
              </a>
            </div>
            <div className="px-3">
              <a
                className="font-semibold"
                href="https://locomocosec.com/2024_LMS_SPONSORSHIP-v3.pdf"
                rel="noreferrer noopener"
              >
                Sponsor
              </a>
            </div>
            <div className="px-3">
              <a
                className="font-semibold"
                href="https://book.passkey.com/event/50781006/owner/10862/landing"
                rel="noreferrer noopener"
                target="_blank"
              >
                Hotel
              </a>
            </div>
            <div className="px-3">
              <a
                href="https://www.eventbrite.com/e/loco-moco-security-conference-tickets-803337172107"
                rel="noreferrer noopener"
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1">
                  Get tickets
                </button>
              </a>
            </div>
          </div>
        </section>
        <section id="fold">
          <img
            fetchpriority="high"
            srcSet={`${coast240w} 240w, ${coast480w} 480w, ${coast960w} 960w`}
            sizes="(max-width: 240px) 240px,
                 (max-width: 480px) 480px,
                 960px"
            src={coast960w}
            alt="Kaua'i"
          />
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
        </section>
        <hr className="max-w-80 mx-auto"></hr>
        <section id="speakers">
          <h2 className="m-3 mx-auto text-center font-bold text-3xl">
            Top Industry Speakers
          </h2>
          <div className="flex flex-wrap">
            {speakers.map((keynoteSpeaker, index) => {
              return (
                <div className="w-1/2 p-3" key={index}>
                  <img
                    className="mx-auto m-3"
                    src={keynoteSpeaker.profilePicture}
                  ></img>
                  <div className="p-6 border-solid border-2 border-grey-500">
                    <span className="sm:text-md mx-auto md:text-2xl font-bold">
                      {`${keynoteSpeaker.firstName} ${keynoteSpeaker.lastName}`}
                    </span>
                    <p className="font-light">{keynoteSpeaker.tagLine}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <footer>
        <p className="font-light">Copyright 2024 LocoMocoSec, All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
