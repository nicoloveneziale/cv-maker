import { useState } from "react";
import "./App.css";
import GeneralInformation from "./components/GeneralInformation.jsx";
import EducationalExperience from "./components/EducationExperience.jsx";
import CVForm from "./components/CVForm.jsx";

function App() {
  const [generalInformationData, setGeneralInformationData] = useState(null);
  const [educationExperienceData, setEducationalExperienceData] = useState([]);

  return (
    <>
      <div id="details">
        <GeneralInformation
          setData={setGeneralInformationData}
        ></GeneralInformation>
        <EducationalExperience
          setData={setEducationalExperienceData}
          currentCvData={educationExperienceData}
        ></EducationalExperience>
      </div>
      <CVForm
        generalInformationData={generalInformationData}
        educationExperienceData={educationExperienceData}
      ></CVForm>
    </>
  );
}

export default App;
