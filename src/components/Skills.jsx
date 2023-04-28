import React from "react";
import data from "./SkillsItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Skills() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="bg-amber-50">
      <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        {/* relative flex items-center*/}
        <h1 className="text-4xl font-bold text-center pb-8 text-[#001b5e]">
          Skills
        </h1>
        <div className="relative flex items-center">
          <MdChevronLeft onClick={slideLeft} size={40} />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {data.map((item) => (
              <img
                key={item.id}
                className="w-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={item.img}
                alt="/"
              />
            ))}
          </div>
          <MdChevronRight onClick={slideRight} size={40} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
