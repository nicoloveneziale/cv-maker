import { useState } from "react";
import "../styles/Section.css";

export default function Section(props) {
  const [sectionData, setSectionData] = useState([]);
  const [formActive, setFormActive] = useState(false);

  function handleAddData() {
    // Create a new empty array to store the form data
    const formData = [];

    // Iterate through each detail in the props.detailList
    props.detailList.forEach((detail, index) => {
      // Get the value from the corresponding input element
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

    // Update the sectionData state by combining the existing data with the new form data
    setSectionData([
      ...sectionData,
      <div key={sectionData.length + 1}>
        {formData.map((item) => (
          <p key={item.label}>
            {item.label}: {item.value}
          </p>
        ))}
      </div>,
    ]);

    // Clear the form fields after adding data (optional)
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
          <div key={section.key}>
            {section.children} {/* Render the children (formData) */}
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
