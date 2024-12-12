import "../styles/GeneralInformation.css";
import { useState } from "react";

export default function GeneralInformation(props) {
  const [showForm, setShownForm] = useState(false);
  const [currentData, setCurrentData] = useState({});

  function toggleShowForm() {
    setShownForm(!showForm);
  }

  function handleInput(e) {
    setCurrentData({ ...currentData, [e.target.name]: e.target.value });
  }

  function handleSaveData() {
    props.setData(currentData);
    console.log(currentData);
  }

  return (
    <>
      <div>
        <h1>General Information</h1>
        <button onClick={toggleShowForm}>Open Img</button>
        <div style={{ visibility: showForm ? "visible" : "hidden" }}>
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
