import "../styles/GeneralInformation.css";
import { useState } from "react";

export default function GeneralInformation(props) {
  const [showForm, setShowForm] = useState(false);
  const [currentData, setCurrentData] = useState({});

  function toggleShowForm() {
    setShowForm(!showForm);
  }

  function handleInput(e) {
    setCurrentData({ ...currentData, [e.target.name]: e.target.value });
  }

  function handleSaveData() {
    setShowForm(false);
    props.setData(currentData);
  }

  return (
    <>
      <div id="component">
        <div id="title-area">
          <h1>General Information</h1>
          <button onClick={toggleShowForm}>{showForm ? "-" : "+"}</button>
        </div>
        <div id="form" style={{ display: showForm ? "flex" : "none" }}>
          <label htmlFor="full-name">Full Name</label>
          <input name="fullName" type="text" onInput={handleInput} />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="daudbwa@gmail.com"
            onInput={handleInput}
          />
          <label htmlFor="tel">Phone Number</label>
          <input
            type="tel"
            name="tel"
            placeholder="074413 131334"
            onInput={handleInput}
          />
          <label htmlFor="location">Location</label>
          <input
            type="address"
            name="location"
            placeholder="Liverpool, UK"
            onInput={handleInput}
          />
          <button className="save-button" onClick={handleSaveData}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
