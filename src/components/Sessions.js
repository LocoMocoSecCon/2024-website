import React from "react";

function SessionizeEmbed() {
  return (
    <div>
      <iframe
        sandbox={true}
        src="/sessions.html"
        title="Sessionize Widget"
        width="100%"
        height="6000"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default SessionizeEmbed;
