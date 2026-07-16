import "./Navbar.css";
import { HiOutlineBars3 } from "react-icons/hi2";

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
       <HiOutlineBars3 />
      </div>
    </nav>
  );
}

export default Navbar;