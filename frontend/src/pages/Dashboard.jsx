import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const modules = [
    {
      name: "Resume Analyzer",
      path: "/resume-analyzer",
    },
    {
      name: "Aptitude Preparation",
      path: "/aptitude",
    },
    {
      name: "Interview Preparation",
      path: "/interview",
    },
    {
      name: "Placement Roadmap",
      path: "/roadmap",
    },
    {
      name: "Skill Tracker",
      path: "/skill-tracker",
    },
    {
      name: "Company-wise Preparation",
      path: "/company-preparation",
    },
  ];

  return (
    <div className="dashboard-container">
      <h1>Welcome, Nandani!</h1>

      <p>Your Placement Preparation Starts Here.</p>

      <h2>Choose Your Module</h2>

      {modules.map((module, index) => (
        <div
          key={index}
          className="module-card"
          onClick={() => navigate(module.path)}
        >
          {module.name}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;