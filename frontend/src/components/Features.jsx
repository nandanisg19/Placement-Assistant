import "../styles/Features.css";
import {
  FaFileAlt,
  FaBrain,
  FaUserTie,
  FaChartLine,
  FaRoad,
  FaBuilding,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaFileAlt />,
      title: "Resume Analyzer",
      description:
        "Analyze your resume and improve your ATS score for better shortlisting.",
    },
    {
      icon: <FaBrain />,
      title: "Aptitude Practice",
      description:
        "Practice aptitude questions with explanations and company patterns.",
    },
    {
      icon: <FaUserTie />,
      title: "Interview Preparation",
      description:
        "Prepare HR and Technical interview questions with confidence.",
    },
    {
      icon: <FaChartLine />,
      title: "Skill Tracker",
      description:
        "Track your daily progress and monitor your placement preparation.",
    },
    {
      icon: <FaRoad />,
      title: "Placement Roadmap",
      description:
        "Follow a structured roadmap to become placement ready.",
    },
    {
      icon: <FaBuilding />,
      title: "Company Preparation",
      description:
        "Access company-specific interview experiences and questions.",
    },
  ];

  return (
    <section className="features">

      <div className="section-heading">

        <h2>Everything You Need</h2>

        <p>
          One platform for complete placement preparation.
        </p>

      </div>

      <div className="feature-grid">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;