import "../styles/Stats.css";
import { FaBookOpen, FaBuilding, FaFileAlt, FaUserGraduate } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaBookOpen />,
      number: "1000+",
      title: "Practice Questions",
    },
    {
      icon: <FaBuilding />,
      number: "150+",
      title: "Companies Covered",
    },
    {
      icon: <FaFileAlt />,
      number: "ATS",
      title: "Resume Analyzer",
    },
    {
      icon: <FaUserGraduate />,
      number: "24×7",
      title: "Placement Support",
    },
  ];

  return (
    <section className="stats">

      {stats.map((item, index) => (
        <div className="stat-card" key={index}>

          <div className="stat-icon">
            {item.icon}
          </div>

          <h2>{item.number}</h2>

          <p>{item.title}</p>

        </div>
      ))}

    </section>
  );
}

export default Stats;