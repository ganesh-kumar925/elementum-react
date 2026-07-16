import "./Navbar.css";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Elementum</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">FAQ's</a></li>
      </ul>

      <div className="menu">
      <HiMenu />
      </div>
    </nav>
  );
}

export default Navbar;