import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import GeneralInformation from "./components/GeneralInformation.jsx";
import EducationalExperience from "./components/EducationExperience.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import CVForm from "./components/CVForm.jsx";

function App() {
  const [generalInformationData, setGeneralInformationData] = useState(null);
  const [educationExperienceData, setEducationalExperienceData] = useState([]);
  const [workExperienceData, setWorkExperienceData] = useState([]);

  return (
    <>
      <Header></Header>
      <div id="main">
        <div id="details">
          <GeneralInformation
            setData={setGeneralInformationData}
          ></GeneralInformation>
          <EducationalExperience
            setData={setEducationalExperienceData}
            currentCvData={educationExperienceData}
          ></EducationalExperience>
          <WorkExperience
            setData={setWorkExperienceData}
            currentCvData={workExperienceData}
          ></WorkExperience>
        </div>
        <div id="cv-div">
          <CVForm
            generalInformationData={generalInformationData}
            educationExperienceData={educationExperienceData}
            workExperienceData={workExperienceData}
          ></CVForm>
        </div>
      </div>
    </>
  );
}

export default App;
