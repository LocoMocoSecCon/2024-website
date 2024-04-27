import speakers from "../speakers";

function Speakers() {
  return (
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
  );
}

export default Speakers;
