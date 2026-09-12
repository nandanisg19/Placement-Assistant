import "../styles/WhyChooseUs.css";
import {
  FaCheckCircle,
  FaUserGraduate,
  FaChartLine,
  FaRocket,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaUserGraduate />,
      title: "Student Focused",
      text: "Designed specially for students preparing for placements."
    },
    {
      icon: <FaChartLine />,
      title: "Track Your Progress",
      text: "Monitor your learning journey with progress tracking."
    },
    {
      icon: <FaLaptopCode />,
      title: "All-in-One Platform",
      text: "Resume, Aptitude, Interview and Roadmap at one place."
    },
    {
      icon: <FaBriefcase />,
      title: "Company Preparation",
      text: "Practice according to company-specific patterns."
    }
  ];

  return (
    <section className="why-section">

      <div className="why-left">

        <span className="why-tag">
          WHY CHOOSE US
        </span>

        <h2>
          Everything You Need To
          <br />
          Crack Your Dream Placement
        </h2>

        <p>
          Placement Assistant helps students prepare smarter,
          stay consistent and improve every day with one
          simple and beautiful platform.
        </p>

        <div className="check-list">

          <div>
            <FaCheckCircle />
            Resume Analysis
          </div>

          <div>
            <FaCheckCircle />
            Aptitude Practice
          </div>

          <div>
            <FaCheckCircle />
            Interview Preparation
          </div>

          <div>
            <FaCheckCircle />
            Company-wise Questions
          </div>

        </div>

      </div>

      <div className="why-right">

        {reasons.map((item, index) => (

          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;