import "../styles/CVForm.css";

export default function CVForm(props) {
  console.log(props);
  return (
    <div id="cv-form">
      <div id="general-information">
        <h2>
          {props.generalInformationData
            ? props.generalInformationData.fullName
            : ""}
        </h2>
        <div id="contacts">
          <p>
            {props.generalInformationData
              ? props.generalInformationData.tel
              : ""}
          </p>
          <p>
            {props.generalInformationData
              ? props.generalInformationData.email
              : ""}
          </p>
          <p>
            {props.generalInformationData
              ? props.generalInformationData.location
              : ""}
          </p>
        </div>
        <div>
          <h4
            style={{
              visibility:
                props.educationExperienceData.length > 0 ? "visible" : "hidden",
            }}
          >
            Education
          </h4>
          {props.educationExperienceData.map((education) => (
            <div key={education.studyName} className="education-cv">
              <p className="ed-title">
                {education.studyName}, {education.school}
              </p>
              <div className="education-details">
                <p className="ed-dates">
                  {education.startDate} - {education.endDate}
                </p>
                <p className="ed-location">
                  {education.city}, {education.country}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h4
            style={{
              visibility:
                props.workExperienceData.length > 0 ? "visible" : "hidden",
            }}
          >
            Work Experience
          </h4>
          {props.workExperienceData.map((work) => (
            <div key={work.jobTitle} className="work-cv">
              <div className="work-title">
                <p className="job-title">
                  {work.jobTitle}, {work.company}
                </p>
                <p>
                  {work.startDate} - {work.endDate}
                </p>
              </div>
              <textarea
                className="work-description"
                value={work.description}
                disabled
              ></textarea>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
