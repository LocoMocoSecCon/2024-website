import logo from "../images/lms-logo.svg";

function NavBar() {
  return (
    <section
      id="navbar"
      className="flex flex-row items-center justify-between text-sm py-3"
    >
      <div id="logo" className="flex-none">
        <img
          src={logo}
          alt="Loco Moco Security Conference Logo"
          className="h-9 flex-none"
        />
      </div>
      <div id="menu" className="flex flex-row justify-between items-center">
        <div className="px-1">
          <a
            className="font-semibold"
            href="#schedule"
            rel="noreferrer noopener"
          >
            Schedule
          </a>
        </div>
        <div className="px-1">
          <a
            className="font-semibold"
            href="https://locomocosec.com/2024_LMS_SPONSORSHIP-v3.pdf"
            rel="noreferrer noopener"
          >
            Sponsor
          </a>
        </div>
        <div className="px-1">
          <a
            className="font-semibold"
            href="https://book.passkey.com/event/50781006/owner/10862/landing"
            rel="noreferrer noopener"
            target="_blank"
          >
            Hotel
          </a>
        </div>
        <div className="px-1">
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
  );
}

export default NavBar;
