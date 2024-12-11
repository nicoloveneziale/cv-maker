import { useState } from "react";
import "../styles/Section.css";

export default function Section(props) {
  const [sectionData, setSectionData] = useState([]);
  const [formActive, setFormActive] = useState(false);

  function handleAddData() {
    const formData = [];

    props.detailList.forEach((detail, index) => {
      const inputElement = document.querySelector(
        `input[name="${detail.label}"]`,
      );
      if (inputElement) {
        const value = inputElement.value;
        formData.push({ label: detail.label, value });
      } else {
        console.error(
          `Input element not found for detail with label: ${detail.label}`,
        );
      }
    });

    setSectionData([
      ...sectionData,
      <div key={sectionData.length + 1}>
        <button
          onClick={(e) => {
            e.target.nextSibling.style.visibility = "visible";
            e.target.style.visibility = "hidden";
          }}
        >
          {formData[0].value}
        </button>
        <div
          style={{
            visibility: "hidden",
          }}
        >
          {formData.map((item) => (
            <div key={item.label}>
              <label>{item.label}</label>
              <input value={item.value || ""}></input>
            </div>
          ))}
          <button
            onClick={(e) => {
              e.target.parentNod.nextSibling.style.visibility = "visible";
              e.target.style.visibility = "hidden";
            }}
          >
            Save
          </button>
        </div>
      </div>,
    ]);

    props.detailList.forEach((detail) => {
      const inputElement = document.querySelector(
        `input[name="${detail.label}"]`,
      );
      if (inputElement) {
        inputElement.value = "";
      }
    });
  }

  function toggleForm() {
    formActive === false ? setFormActive(true) : setFormActive(false);
  }

  return (
    <div>
      <button onClick={props.handleOpen}>Show</button>
      <h2>{props.title}</h2>
      <div style={{ visibility: props.active ? "visible" : "hidden" }}>
        {sectionData.map((section) => (
          <div
            key={section.key}
            style={{
              visibility: !formActive && props.active ? "visible" : "hidden",
            }}
          >
            {section}
          </div>
        ))}
        <div
          style={{
            visibility: formActive && props.active ? "visible" : "hidden",
          }}
        >
          {props.detailList.map((detail, index) => (
            <div key={index}>
              <label>{detail.label}</label>
              <input type={detail.type} name={detail.label}></input>
            </div>
          ))}
          <button onClick={handleAddData}>Add</button>
          <button onClick={toggleForm}>Cancel</button>
        </div>
        <button
          onClick={toggleForm}
          style={{
            visibility: !formActive && props.active ? "visible" : "hidden",
          }}
        >
          + {props.title}
        </button>
      </div>
    </div>
  );
}
