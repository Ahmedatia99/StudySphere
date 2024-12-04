import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { FiX } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import classNames from "classnames";

export default function QAF() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section
      className={classNames(
        `border-2 border-stroke transition-all max-w-md rounded-lg mb-5 `,
        isVisible ? "md:px-9 md:py-4 max-w-md" : "md:px-9 md:py-4 mobile:p-2"
      )}
    >
      <div className="flex flex-col pt-3 transition-all">
        <div className={classNames(`flex items-center justify-center `)}>
          <h2 className="mobile:text-sm text-spantext">
            Can I enroll in multiple courses at once?
          </h2>
          <button onClick={toggleVisibility} className="transition-all">
            {isVisible ? (
              <FiX
                className="md:ml-8 mobile:ml-3 p-2 bg-liteorange rounded-md"
                size="32px"
              />
            ) : (
              <GoPlus
                className="md:ml-8 mobile:ml-3  p-2 bg-liteorange rounded-md"
                size="32px"
              />
            )}
          </button>
        </div>

        {isVisible && (
          <div className="flex flex-col transition-all ">
            <p className="my-10 mobile:px-2 max-w-md text-base text-spantext">
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
            <div className="flex justify-between items-center bg-litewhite px-5 py-3">
              <span className="text-sm">
                Enrollment Process for Different Courses
              </span>
              <Link
                to="./courses"
                className="p-0 hover:translate-x-1 transition-all"
              >
                <GoArrowRight
                  className=" p-3 bg-white rounded-full"
                  size="40px"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
