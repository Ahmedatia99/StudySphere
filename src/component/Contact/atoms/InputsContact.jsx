import { Button } from "../../atoms/Button/Button.tsx";
import ComunicationContact from "./communicationContact";
export default function InputsContact() {
  return (
    <main className="container mx-auto mt-20">
      <section className="bg-white flex rounded-lg p-16 pr-0">
        <div className=" w-2/3">
          <div className=" grid grid-cols-2 gap-6 ">
            <div>
              <div className="flex flex-col items-start">
                <label className="text-base text-textcook font-medium mb-3 pl-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="p-5 border-2 border-stroke rounded-lg text-base outline-none w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <label className="text-base text-textcook font-medium mb-3 pl-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="p-5 border-2 border-stroke rounded-lg text-base outline-none w-full"
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="text-base text-textcook font-medium mb-3 pl-1">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                className="p-5 border-2 border-stroke rounded-lg text-base outline-none w-full"
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="text-base text-textcook font-medium mb-3 pl-1">
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter your Phone"
                className="p-5 border-2 border-stroke rounded-lg text-base outline-none w-full"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start mt-6">
              <label className="text-base text-textcook font-medium mb-3 pl-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter your Subject "
                className="p-5 border-2 border-stroke rounded-lg text-base outline-none w-full"
              />
            </div>
            <div className="flex flex-col items-start my-10">
              <label className="text-base text-textcook font-medium mb-3 pl-1">
                Message
              </label>
              <textarea
                type="textarea"
                placeholder="Enter your Message "
                className="p-5 border-2 border-stroke rounded-lg text-base outline-none w-full"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <Button
                action="Send Your Message"
                varient="primary"
                paddingname="px-5 py-4"
              />
            </div>
          </div>
        </div>
        <div className="bg-stroke mx-16">
          <svg height="100%" width="2" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="0" y2="200" />
          </svg>
        </div>
        <div>
          <ComunicationContact />
        </div>
      </section>
    </main>
  );
}
