import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          🚀 Your Placement Journey Starts Here
        </span>

        <h1>
          Build Skills.
          <br />
          Crack Interviews.
          <br />
          <span>Get Placed.</span>
        </h1>

        <p>
          Everything you need for placement preparation in one place —
          Resume Analyzer, Aptitude Practice, Interview Preparation,
          Skill Tracking and Company-wise Roadmaps.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/dashboard")}
          >
            Start Preparing
            <FaArrowRight />
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="floating-card card1">
          📄 Resume Analyzer
        </div>

        <div className="floating-card card2">
          🧠 Aptitude Practice
        </div>

        <div className="floating-card card3">
          💼 Interview Prep
        </div>

      </div>

    </section>
  );
}

export default Hero;