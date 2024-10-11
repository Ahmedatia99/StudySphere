import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
export default function communicationContact() {
  return (
    <main>
      <section className="grid grid-cols-1">
        <div className="text-base flex flex-col  items-center mb-6 p-8 border border-liteorange rounded-lg">
          <MdEmail className="bg-litewhite p-3 rounded-lg v" size="45px" />
          atyaa629@gmail.com
        </div>
        <div className="text-base flex flex-col  items-center mb-6 p-8 border border-liteorange rounded-lg">
          <FaPhone className="bg-litewhite p-3 rounded-lg mb-4" size="45px" />
          +02 0111 7910 989{" "}
        </div>
        <div className="text-base flex flex-col  items-center mb-6 p-8 border border-liteorange rounded-lg">
          <FaLocationDot
            className="bg-litewhite p-3 rounded-lg mb-4"
            size="45px"
          />
          Somewhere in the World{" "}
        </div>

        <div className="  flex flex-col justify-center items-center p-8 border border-liteorange rounded-lg">
          <div className="flex justify-center mb-4">
            <a
              href="https://twitter.com/ahmedatiaa99"
              className="mr-6 text-caption p-3 bg-litewhite"
              target="blank"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/ahmedatiaa99/"
              className="mr-6 text-caption p-3 bg-litewhite"
              target="blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://discord.com/channels/@me"
              className="text-caption p-3 bg-litewhite"
              target="blank"
            >
              <FaDiscord />
            </a>
          </div>
          Social Profiles
        </div>
      </section>
    </main>
  );
}
