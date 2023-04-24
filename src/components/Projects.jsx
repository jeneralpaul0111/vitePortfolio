import React from "react";
import ProjectsItem from "./ProjectsItem";
import payrollIMG from "../assets/payroll.png";
import timeAndAttendanceIMG from "../assets/timeAndAttendance.png";
import inventoryIMG from "../assets/inventory.png";
import processIMG from "../assets/process.png";
import procurementIMG from "../assets/procurement.png";
import machineIMG from "../assets/machine.png";

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        These projects are enterprise level software application or a web-based
        solution that helps the office and production team to automate their
        daily tasks, streamline processes, and increase productivity.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem
          img={payrollIMG}
          title="Payroll"
          desc=" API used for consolidation of attendance data and convert it to salaries and deductions."
          role="Role: DB admin and system maintenance"
        />
        <ProjectsItem
          img={timeAndAttendanceIMG}
          title="Time and Attendance"
          desc="System used for emplyee shift scheduling and checking daily attendances of employee."
          role="Role: DB admin and system maintenance"
        />
        <ProjectsItem
          img={inventoryIMG}
          title="Inventory"
          desc="System that can be use to manage office suppliers and tools."
          role="Role: DB admin, system developer"
        />
        <ProjectsItem
          img={processIMG}
          title="Process Traceability"
          desc="System that can be use to track the movement of raw materials in the production area up to the shipment of the finished product."
          role="Role: DB admin, system developer"
        />
        <ProjectsItem
          img={procurementIMG}
          title="Purchasing"
          desc=" System that allows users to submit purchase request, accept orders and create receiving reports."
          role="Role: DB admin, system developer"
        />
        <ProjectsItem
          img={machineIMG}
          title="Output Monitoring"
          desc="System that collects data from the machine for production planning and reject analysis."
          role="Role: DB admin, system developer"
        />
      </div>
    </div>
  );
}

export default Projects;
