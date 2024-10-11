import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className=" text-center  mt-20 bg-white">
      <main className="container mx-auto px-14">
        <section className="mx-6 py-10 text-center md:text-left">
          <div className=" grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* first column */}
            <div>
              <h6 className="mb-4 flex items-center text-textcook font-spaceMono justify-center capitalize md:justify-start">
                <img className="mr-3" src="./images/Logo.svg" />
                Study Sphere
              </h6>
              <div className="text-base flex  items-center mb-5">
                <MdEmail className="mr-2" />
                atyaa629@gmail.com
              </div>
              <div className="text-base flex  items-center mb-5">
                <FaPhone className="mr-2" />
                +02 0111 7910 989{" "}
              </div>
              <div className="text-base flex  items-center">
                <FaLocationDot className="mr-2" />
                Somewhere in the World{" "}
              </div>
            </div>
            {/* second column */}
            <div className="grid grid-cols-3 gap-8">
              <div className="">
                <h6 className="text-xl font-semibold mb-4 capitalize font-spaceMono md:justify-start">
                  Home
                </h6>
                <div className="flex flex-col text-spantext">
                  <a href="#!" className="p-0 pb-2 ">
                    Benefits
                  </a>
                  <a href="#!" className="p-0 pb-2 ">
                    Our Courses
                  </a>
                  <a href="#!" className="p-0 pb-2">
                    Our Testimonials{" "}
                  </a>
                  <a href="#!" className="text-caption p-0 pb-2">
                    Our Testimonials{" "}
                  </a>
                  <a href="#!" className="text-caption p-0 pb-2">
                    Our FAQ
                  </a>
                </div>
              </div>
              <div>
                <h6 className="text-xl font-semibold mb-4 capitalize font-spaceMono md:justify-start">
                  About Us
                </h6>
                <ul className="text-spantext">
                  <li className="p-0 pb-2 ">
                    <a className="p-0" href="!#">
                      Company
                    </a>
                  </li>
                  <li className="p-0 pb-2 ">
                    <a className="p-0" href="!#">
                      Achievements
                    </a>
                  </li>
                  <li className="p-0 pb-2 ">
                    <a className="p-0" href="!#">
                      Our Goals
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className=" text-center text-xl font-semibold mb-4 capitalize font-spaceMono md:justify-start">
                  Social Profile
                </h6>
                <div className="flex justify-center">
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
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <div className=" py-5  text-center flex justify-center border-t-2 text-spantext text-sm ">
          <span className="flex justify-center items-center desktop:text-lg mobile:text-xs">
            Made With{"  "}Love By Ahmed Atia © 2024
          </span>
        </div>
      </main>
    </footer>
  );
}
