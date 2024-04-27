import React, { useRef, useEffect } from "react";

function SpeakerWall() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) {
        return;
      }

      if (event.data && event.data.type === "setHeight" && event.data.height) {
        iframeRef.current.style.height = `${event.data.height + 100}px`;
      }
    };

    window.addEventListener("message", handleMessage, false);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      <iframe
        ref={iframeRef}
        src="/speakers.html"
        title="Sessionize Speaker Wall"
        width="100%"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default SpeakerWall;
