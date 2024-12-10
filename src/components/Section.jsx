import "../styles/Section.css";

export default function Section(props) {
  return (
    <div>
      <button onClick={props.handleOpen}>Show</button>
      <h2>{props.title}</h2>
      {props.active === true &&
        props.detailList.map((detail, index) => (
          <div key={index}>
            <label>{detail.label}</label>
            <input type={detail.type}></input>
          </div>
        ))}
    </div>
  );
}
