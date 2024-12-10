import { useState } from "react";
import "../styles/Details.css";
import Section from "./Section.jsx";

const sectionList = [
  {
    title: "Personal Details",
    detailList: [
      { label: "Full Name", type: "text" },
      { label: "Email", type: "email" },
      { label: "Phone Number", type: "phone" },
      { label: "Address", type: "text" },
    ],
    active: false,
    multiple: false,
  },
  {
    title: "Education",
    detailList: [
      { label: "School", type: "text" },
      { label: "Degree", type: "text" },
      { label: "Start Date", type: "text" },
      { label: "End Date", type: "text" },
      { label: "Location", type: "text" },
    ],
    active: false,
    multiple: true,
  },
];

export default function Details() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    console.log("click");
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
    console.log(activeIndex);
  };

  return (
    <div>
      {sectionList.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          detailList={section.detailList}
          active={index === activeIndex}
          handleOpen={() => handleClick(index)}
        ></Section>
      ))}
    </div>
  );
}
