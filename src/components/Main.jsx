import React from "react";
import logo from "../images/IMG_6314.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={logo}
      />
      <div className="w-full h-screen absolute top-0 left 0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Paul Caballero
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a{""}
            <TypeAnimation
              sequence={[
                "Coder", // Types 'One'
                1000, // Waits 1s
                "Developer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Software Engineer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "System Engineers", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter
              className="cursor-pointer"
              size={20}
              href="https://twitter.com/jeneralpaul0111"
            />
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
