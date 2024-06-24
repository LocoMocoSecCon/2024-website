import aws from "../images/sponsors/aws.webp";
import cloudflare from "../images/sponsors/cloudflare.webp";
import discernible from "../images/sponsors/discernible.webp";
import sheHacksPurple from "../images/sponsors/she-hacks-purple.webp";
import zatik from "../images/sponsors/zatik.webp";

const sponsors = [
  [aws, "Amazon Web Services", "https://aws.amazon.com/security/"],
  [cloudflare, "Cloudflare", "https://www.cloudflare.com/"],
  [discernible, "Discernible", "https://discernibleinc.com/"],
  [sheHacksPurple, "She Hacks Purple", "https://shehackspurple.ca/"],
  [zatik, "Zatik", "https://www.zatik.io/"],
];

// Fisher-Yates Shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function Sponsors() {
  return (
    <div className="flex flex-wrap justify-center">
      {shuffleArray(sponsors).map((sponsor, index) => (
        <div key={index} className="w-1/3 p-2 flex justify-center items-center">
          <a rel="noreferrer noopener" href={sponsor[2]}>
            <img alt={sponsor[1]} src={sponsor[0]} className="w-32 h-auto" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Sponsors;
