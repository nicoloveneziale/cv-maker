import "../styles/CVForm.css";

export default function CVForm(props) {
  console.log(props);
  return (
    <div id="cb-form">
      <div id="general-information">
        <h2>
          {props.generalInformationData
            ? props.generalInformationData.fullName
            : ""}
          <div id="contacts">
            <p>
              {props.generalInformationData
                ? props.generalInformationData.email
                : ""}
            </p>
            <p>
              {props.generalInformationData
                ? props.generalInformationData.tel
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
                  props.educationExperienceData.length > 0
                    ? "visible"
                    : "hidden",
              }}
            >
              Education
            </h4>
            {props.educationExperienceData.map((education) => (
              <div key={education.studyName} className="education-cv">
                <p>
                  {education.studyName}, {education.school}
                </p>
                <p>
                  {education.startDate} - {education.endDate}
                </p>
                <p>
                  {education.city}, {education.country}
                </p>
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
                <p>
                  {work.jobTitle}, {work.company}
                </p>
                <p>
                  {work.startDate} - {work.endDate}
                </p>
                <p>{work.description}</p>
              </div>
            ))}
          </div>
        </h2>
      </div>
    </div>
  );
}
