import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2012,
    title: "Jr. Systems Engineer",
    duration: "2 Years",
    detail1:
      "Develops small system to assist with resolving technical and administrative issues.",
    detail2:
      "Provides technical support to end-users, troubleshooting hardware and software issues, and resolving technical problems.",
    detail3:
      "Install, maintain, and repair issues on desktops, laptops, and other computer peripherals",
  },
  {
    year: 2014,
    title: "Systems Engineer",
    duration: "1 Year",
    detail1: "Payroll System support and development main in-charge.",
    detail2:
      "Server administrator and maintenance (Acrive Directory, DHCP, WSUS, SQL, IIS, Exchange, File server etc..).",
    detail3:
      "Design, maintain and troubleshoot network infrastructure, including switches, routers, firewalls, and servers.",
    detail4: "Maintain security, backup, and redundancy strategies.",
    detail5:
      "Proactively ensure the highest levels of systems and infrastructure availability.",
  },
  {
    year: 2015,
    title: "Systems Engineer Supervisor/DPO/IT Head",
    duration: "7 Years ++",
    detail1:
      "System Development main in-charge (Payroll, Inventory, Purchasing, Sales, etc..)",
    detail2:
      "Oversee ongoing improvements and the feasibility of system enhancements.",
    detail3:
      "Evaluates and implements the systems that support end users in the productive use of computer hardware and software.",
    detail4: "Establish and implement the company’s Personal Data Protection.",
    detail5:
      "Facilitates communication between staff, management, vendors and other technology resources within the organization.",
    detail6:
      "Responsible for the management of multiple information and communication systems and projects including voice, data, imaging and office documentation",
    detail7:
      "Conducts direct supervision and coordination to software developers in planning designing and implementation of projects.",
    detail8:
      "Set goals for performance and deadlines in ways that comply with company's plans, targets and communicate them to subordinates.",
  },
  {
    year: 2012,
    title: "Software Engineer",
    duration: "10 years and above",
    detail1:
      "Software development (SQL, ORACLE, MongoDB, JSON, C++, ASSEMBLY, JAVA, VB6, VBA, VB.NET, FoXPRO, C#, JAVASCRIPT, HTML, CSS, Bootstrap, ReactJS)",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          detail1={item.detail1}
          detail2={item.detail2}
          detail3={item.detail3}
          detail4={item.detail4}
          detail5={item.detail5}
          detail6={item.detail6}
          detail7={item.detail7}
          detail8={item.detail8}
        />
      ))}
    </div>
  );
};

export default Work;
