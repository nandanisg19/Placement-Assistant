import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🎯 Placement Assistant
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/resume-analyzer">Resume</Link>
        <Link to="/aptitude">Aptitude</Link>
        <Link to="/interview">Interview</Link>
        <Link to="/skill-tracker">Skills</Link>
      </div>

      <Link to="/login" className="login-btn">
        Login
      </Link>

    </nav>
  );
}

export default Navbar;