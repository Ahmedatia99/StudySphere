import { IoPlayCircleOutline } from "react-icons/io5";

export default function Sponser() {
  return (
    <main>
      <section className=" container mx-auto px-3 rounded-xl">
        <div className="flex justify-between items-center bg-white p-8 mt-20 mx-5">
          <img src="./images/Zapier.svg" />
          <img src="./images/Spotify.svg" />
          <img src="./images/Zoom_logo.svg" />
          <img src="./images/Amazon_logo.svg" />
          <img src="./images/Notion.svg" />
          <img src="./images/Netflix.svg" />
        </div>
        <div className="flex justify-center items-center mx-auto my-10">
          <img src="./images/team.svg" className="relative" />
          <IoPlayCircleOutline
            className="absolute text-white cursor-pointer"
            size="50px"
          />
        </div>
      </section>
    </main>
  );
}
