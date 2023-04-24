import React from "react";
import ProjectsItem from "./ProjectsItem";
import payrollIMG from "../assets/payroll.png";
import timeAndAttendanceIMG from "../assets/timeAndAttendance.png";
import inventoryIMG from "../assets/inventory.png";
import processIMG from "../assets/process.png";

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et placeat
        dolore illum? Non delectus in vel consectetur quam libero beatae
        expedita, eum quasi accusantium illo! Et possimus explicabo maiores
        animi.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem img={payrollIMG} title="Payroll" />
        <ProjectsItem img={timeAndAttendanceIMG} title="Time and Attendance" />
        <ProjectsItem img={inventoryIMG} title="Inventory" />
        <ProjectsItem img={processIMG} title="Process Traceability" />
      </div>
    </div>
  );
}

export default Projects;
