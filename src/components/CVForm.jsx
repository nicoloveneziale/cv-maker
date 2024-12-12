import "../styles/CVForm.css";

export default function CVForm(generalInformationData) {
  console.log(generalInformationData);
  return (
    <div id="cb-form">
      <div id="general-information">
        <h2>
          {generalInformationData.generalInformationData
            ? generalInformationData.generalInformationData.fullName
            : ""}
          <div id="contacts">
            <p>
              {generalInformationData.generalInformationData
                ? generalInformationData.generalInformationData.email
                : ""}
            </p>
            <p>
              {generalInformationData.generalInformationData
                ? generalInformationData.generalInformationData.tel
                : ""}
            </p>
            <p>
              {generalInformationData.generalInformationData
                ? generalInformationData.generalInformationData.location
                : ""}
            </p>
          </div>
        </h2>
      </div>
    </div>
  );
}
