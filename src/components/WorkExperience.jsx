import "../styles/WorkExperience.css";
import { useState } from "react";

export default function WorkExperience(props) {
  const [showForm, setShownForm] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(props.currentCvData.length);

  function toggleShowForm() {
    setShownForm(!showForm);
  }

  function handleInput(e) {
    setCurrentData({ ...currentData, [e.target.name]: e.target.value });
  }

  function handleSaveData(pastIndex = null) {
    setShownForm(false);
    setCurrentData({});
    props.setData([
      ...props.currentCvData.slice(0, currentIndex),
      currentData,
      ...props.currentCvData.slice(currentIndex + 1),
    ]);
    setCurrentIndex(props.currentCvData.length);
  }

  function handleEdit(index) {
    setCurrentData(props.currentCvData[index]);
    setShownForm(true);
    setCurrentIndex(index);
  }

  function handleCancel() {
    setCurrentData({});
    setShownForm(false);
    setCurrentIndex(props.currentCvData.length);
  }

  function handleDelete() {
    setCurrentData({});
    setShownForm(false);
    props.setData([
      ...props.currentCvData.slice(0, currentIndex),
      ...props.currentCvData.slice(currentIndex + 1),
    ]);
    setCurrentIndex(props.currentCvData.length);
  }

  function renderForm() {
    return (
      <div
        style={{
          display: showForm ? "flex" : "none",
        }}
        className="form"
      >
        <label htmlFor="jobTitle">Job Title</label>
        <input
          name="jobTitle"
          type="text"
          onInput={handleInput}
          placeholder="Web Developer"
          value={currentData.jobTitle || ""}
        />
        <label htmlFor="company">Company</label>
        <input
          name="company"
          type="text"
          placeholder="Google"
          onInput={handleInput}
          value={currentData.company || ""}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="startDate"
          onInput={handleInput}
          value={currentData.startDate || ""}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          name="endDate"
          onInput={handleInput}
          value={currentData.endDate || ""}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          onInput={handleInput}
          value={currentData.description || ""}
        />
        <div id="button-div">
          <button id="save-button" onClick={handleSaveData}>
            Save
          </button>
          <button id="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button
            id="delete-button"
            onClick={handleDelete}
            style={{
              display:
                currentIndex != props.currentCvData.length ? "block" : "none",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div id="component">
        <div id="title-area">
          <h1>Work Experience</h1>
          <button onClick={toggleShowForm}>+</button>
        </div>
        {props.currentCvData.map((work, index) => (
          <div
            key={index}
            style={{
              display: !showForm ? "flex" : "none",
            }}
            className="saved-section"
          >
            <div className="description-section">
              <p style={{ fontWeight: 900 }}>{work.jobTitle}</p>
              <p>{work.company}</p>
              <p>
                {work.startDate} - {work.endDate}
              </p>
            </div>
            <button
              onClick={() => {
                handleEdit(index);
              }}
            >
              Edit
            </button>
          </div>
        ))}
        {renderForm()}
      </div>
    </>
  );
}
