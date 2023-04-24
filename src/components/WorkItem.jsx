import React from "react";

const WorkItem = ({
  year,
  title,
  duration,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
  detail6,
  detail7,
  detail8,
}) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-sx md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-medium italic text-stone-500">
          {detail1}
        </p>
        <p className="my-2 text-base font-normal text-stone-500">{detail2}</p>
        <p className="my-2 text-base font-normal text-stone-500">{detail3}</p>
        <p className="my-2 text-base font-normal text-stone-500">{detail4}</p>
        <p className="my-2 text-base font-normal text-stone-500">{detail5}</p>
        <p className="my-2 text-base font-normal text-stone-500">{detail6}</p>
        <p className="my-2 text-base font-normal text-stone-500">{detail7}</p>
        <p className="my-2 text-base font-normal text-stone-500">{detail8}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
