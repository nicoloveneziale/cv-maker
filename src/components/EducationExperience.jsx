import "../styles/EducationExperience.css";
import { useState } from "react";

export default function GeneralInformation(props) {
  const [showForm, setShownForm] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [editForm, setEditForm] = useState(null);
  let index = props.currentCvData == null ? 0 : props.currentCvData.length;

  function toggleShowForm() {
    setShownForm(!showForm);
  }

  function handleInput(e) {
    setCurrentData({ ...currentData, [e.target.name]: e.target.value });
  }

  function handleSaveData(pastIndex = null) {
    setShownForm(false);
    setEditForm(null);
    props.setData([
      ...props.currentCvData.slice(0, pastIndex || index),
      currentData,
      ...props.currentCvData.slice(pastIndex + 1 || index + 1),
    ]);
  }

  function renderForm(education, index) {
    let dataToRender;
    education != null ? (dataToRender = education) : (dataToRender = {});

    return (
      <div
        style={{
          visibility: showForm || education != null ? "visible" : "hidden",
        }}
      >
        <label htmlFor="studyName">Name of Study</label>
        <input
          name="studyName"
          type="text"
          onInput={handleInput}
          placeholder="BsC Computer Science"
          value={dataToRender.studyName || ""}
        />
        <label htmlFor="school">Place of Study</label>
        <input
          name="school"
          type="text"
          placeholder="University of Liverpool"
          onInput={handleInput}
          value={dataToRender.school || ""}
        />
        <label htmlFor="city">City</label>
        <input
          type="name"
          name="city"
          placeholder="Liverpool"
          onInput={handleInput}
          value={dataToRender.city || ""}
        />
        <label htmlFor="country">Country</label>
        <input
          type="country"
          name="country"
          placeholder="UK"
          onInput={handleInput}
          value={dataToRender.country || ""}
        />
        <label htmlFor="startDate"></label>
        <input
          type="date"
          name="startDate"
          onInput={handleInput}
          value={dataToRender.startDate || ""}
        />
        <label htmlFor="endDate"></label>
        <input
          type="date"
          name="endDate"
          onInput={handleInput}
          value={dataToRender.endDate || ""}
        />
        <button className="save-button" onClick={handleSaveData}>
          Save
        </button>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>Educational Experience</h1>
        {props.currentCvData.map((education, index) => (
          <div
            key={index}
            style={{
              visibility: !showForm ? "visible" : "hidden",
            }}
          >
            <p>{education.studyName}</p>
            <p>{education.school}</p>
            <p>
              {education.city}, {education.country}
            </p>
            <p>
              {education.startDate} - {education.endDate}
            </p>
            <button
              onClick={() => {
                editForm == null
                  ? setEditForm(renderForm(education, index))
                  : setEditForm(null);
                toggleShowForm();
              }}
            >
              Edit
            </button>
          </div>
        ))}
        <button onClick={toggleShowForm}>Open Img</button>
        {renderForm()}
        {editForm}
      </div>
    </>
  );
}
