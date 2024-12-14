import JsPDF from "jspdf";

export default function SaveFormButton() {
  const generatePDF = () => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.querySelector("#cv-div")).then(() => {
      report.save("report.pdf");
    });
  };

  return <button onClick={generatePDF}>Save</button>;
}
