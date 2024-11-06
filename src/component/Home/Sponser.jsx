import { IoPlayCircleOutline } from "react-icons/io5";

export default function Sponser() {
  return (
    <main>
      <section className=" tablet:container mx-auto px-5 rounded-xl">
        <div className="flex justify-between items-center bg-white tablet:p-8 mobile:p-3 mt-20 ">
          <img src="./images/Zapier.svg" />
          <img src="./images/Spotify.svg" />
          <img src="./images/Zoom_logo.svg" />
          <img
            src="./images/Amazon_logo.svg"
            className="tablet:flex mobile:hidden"
          />
          <img
            src="./images/Notion.svg"
            className="laptop:flex tablet:hidden mobile:hidden"
          />
          <img
            src="./images/Netflix.svg"
            className="laptop:flex tablet:hidden mobile:hidden"
          />
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
