import { Button } from "../atoms/Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { IoMenu } from "react-icons/io5";
import { FiX } from "react-icons/fi";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [navbar, setNavbar] = useState(true);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="  w-full text-textcook flex justify-center xl-text-base md:text-sm mobile:text-sm pt-5">
      <section className="tablet:container  flex items-center justify-between w-full px-5 ">
        <div className=" md:items-center md:flex w-full">
          {/* LOGO 1 */}
          <div className="flex items-center justify-between py-0 md:py-0 md:block3 ">
            <Link className="flex p-0">
              <img
                src={"/images/Logo.svg"}
                alt="studysphere"
                className=" laptop:w-28 tablet:w-20 h-16 mobile:w-10 mobile:h-10 :"
              />
            </Link>
            <div className="flex justify-center items-center">
              <div className="hidden  laptop:hidden tablet:hidden mobile:flex labtob:hidden ">
                <Button
                  variant="second"
                  action="Sign Up"
                  paddingname="px-3 py-2 text-xs"
                />
                <Button
                  variant="primary"
                  action="Login"
                  paddingname="px-3 py-2 text-xs"
                />
              </div>
              <div className="md:hidden tablet:order-2 ">
                <button
                  className="p-2 text-purple_secon rounded outline-none focus:border-purple focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <IoMenu size={20} /> : <FiX size={20} />}
                </button>
              </div>
            </div>
          </div>
          {/* ul -2*/}
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 sm:mt-3 order-2 w-full tablet:pt-0 mobile:pt-10 tablet:border-0 mobile:border-t-2 border-lighting ${
              navbar ? "hidden" : "block display"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
              <li className="md:ml-3 mobile:ml-1 xl:ml-5">
                <Link
                  onClick={() => handleClick("home")}
                  className={classNames(
                    activeLink === "home"
                      ? "drop-shadow-lg bg-morning text-white py-4 px-6 laptop:p-3 tablet:p-2 mobile:px-3 mobile:py-2 flex transition-all items-center justify-center"
                      : "py-4 px-6 mobile:px-3 mobile:py-2"
                  )}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="md:ml-3 mobile:ml-1 xl:ml-5">
                <Link
                  onClick={() => handleClick("courses")}
                  className={classNames(
                    activeLink === "courses"
                      ? "drop-shadow-lg bg-morning text-white py-4 px-6 laptop:p-3 tablet:p-2 mobile:px-3 mobile:py-2 flex transition-all items-center justify-center"
                      : "lg:p-3 xl:p-5  mobile:px-3 mobile:py-2"
                  )}
                  to={"/courses"}
                >
                  Courses
                </Link>
              </li>
              <li className="md:ml-3 mobile:ml-1 xl:ml-5">
                <Link
                  onClick={() => handleClick("aboutus")}
                  className={classNames(
                    activeLink === "aboutus"
                      ? "drop-shadow-lg bg-morning text-white py-4 px-6 laptop:p-3 tablet:p-2 mobile:px-3 mobile:py-2 flex transition-all items-center justify-center"
                      : "lg:p-3 xl:p-5  mobile:px-3 mobile:py-2"
                  )}
                  to={"/about"}
                >
                  About Us
                </Link>
              </li>

              <li className="md:ml-3 mobile:ml-1 xl:ml-5">
                <Link
                  to={"/pricing"}
                  onClick={() => handleClick("pricing")}
                  className={classNames(
                    activeLink === "pricing"
                      ? "drop-shadow-lg bg-morning text-white py-4 px-6   laptop:p-3 tablet:p-2 mobile:px-3 mobile:py-2 flex transition-all items-center justify-center"
                      : "lg:p-3 xl:p-5  mobile:px-3 mobile:py-2"
                  )}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* login-3 */}

        <div className="flex desktop:flex tablet:flex mobile:hidden labtob:flex">
          <Button
            variant="second"
            action="SignUp"
            paddingname="desktop:px-5 desktop:py-3 md:p-2 sm:p-2"
          />
          <Button
            variant="primary"
            action="Login"
            paddingname="desktop:px-5 desktop:py-3 md:p-2 sm:p-2"
          />
        </div>
      </section>
    </nav>
  );
}
