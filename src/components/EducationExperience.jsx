import "../styles/EducationExperience.css";
import { useState } from "react";

export default function GeneralInformation(props) {
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
        <label htmlFor="studyName">Name of Study</label>
        <input
          name="studyName"
          type="text"
          onInput={handleInput}
          placeholder="BsC Computer Science"
          value={currentData.studyName || ""}
        />
        <label htmlFor="school">Place of Study</label>
        <input
          name="school"
          type="text"
          placeholder="University of Liverpool"
          onInput={handleInput}
          value={currentData.school || ""}
        />
        <label htmlFor="city">City</label>
        <input
          type="name"
          name="city"
          placeholder="Liverpool"
          onInput={handleInput}
          value={currentData.city || ""}
        />
        <label htmlFor="country">Country</label>
        <input
          type="country"
          name="country"
          placeholder="UK"
          onInput={handleInput}
          value={currentData.country || ""}
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
          <h1>Educational Experience</h1>
          <button onClick={toggleShowForm}>{showForm ? "-" : "+"}</button>
        </div>
        {props.currentCvData.map((education, index) => (
          <div
            key={index}
            style={{
              display: !showForm ? "flex" : "none",
            }}
            className="saved-section"
          >
            <div className="description-section">
              <p style={{ fontWeight: 900 }}>{education.studyName}</p>
              <p>{education.school}</p>
              <p>
                {education.city}, {education.country}
              </p>
              <p>
                {education.startDate} - {education.endDate}
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
