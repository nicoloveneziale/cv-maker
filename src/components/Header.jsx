import "../styles/Header.css";
import SaveFormButton from "./SaveFormButton.jsx";

export default function Header() {
  return (
    <header>
      <div>
        <h1>CV Maker</h1>
        <p>By Nicolo Veneziale</p>
      </div>

      <SaveFormButton></SaveFormButton>
    </header>
  );
}
