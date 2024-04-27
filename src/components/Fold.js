import coast960w from "../images/kauai-coast-960w.webp";
import coast480w from "../images/kauai-coast-480w.webp";
import coast240w from "../images/kauai-coast-240w.webp";

function Fold() {
  return (
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
  );
}

export default Fold;
