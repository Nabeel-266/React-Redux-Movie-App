import "./header.scss";
import { Link } from "react-router-dom";
import userImage from "../../images/profile-image.jpg";

function Header() {
  return (
    <header className="header">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <span className="logo">🎬 Movie App</span>
      </Link>
      <div className="userImage">
        <img src={userImage} alt="user" />
      </div>
    </header>
  );
}

export default Header;
