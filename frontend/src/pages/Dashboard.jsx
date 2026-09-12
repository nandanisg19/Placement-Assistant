import "../styles/Dashboard.css";
import {
  FaFileAlt,
  FaBrain,
  FaUserTie,
  FaChartLine,
  FaRoad,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

function Dashboard() {
  const modules = [
    {
      icon: <FaFileAlt />,
      title: "Resume Analyzer",
      description: "Improve your ATS score",
    },
    {
      icon: <FaBrain />,
      title: "Aptitude",
      description: "Practice aptitude questions",
    },
    {
      icon: <FaUserTie />,
      title: "Interview Prep",
      description: "HR & Technical Interview",
    },
    {
      icon: <FaChartLine />,
      title: "Skill Tracker",
      description: "Track your daily progress",
    },
    {
      icon: <FaRoad />,
      title: "Roadmap",
      description: "Follow your placement roadmap",
    },
    {
      icon: <FaBuilding />,
      title: "Companies",
      description: "Company-wise preparation",
    },
  ];

  return (
    <div className="dashboard">

      <div className="welcome-card">

        <h1>👋 Welcome Back!</h1>

        <p>
          Continue your placement preparation and stay one step closer
          to your dream job.
        </p>

      </div>

      <div className="top-cards">

  <div className="profile-card">

    <div className="profile-avatar">
      👩‍💻
    </div>

    <h2>Welcome, Nandani!</h2>

    <p>Computer Engineering Student</p>

    <span>Dream Company 🎯</span>

  </div>

  <div className="small-stats">

    <div className="mini-card">
      <h3>7 🔥</h3>
      <p>Day Streak</p>
    </div>

    <div className="mini-card">
      <h3>12</h3>
      <p>Completed Tasks</p>
    </div>

    <div className="mini-card">
      <h3>5</h3>
      <p>Mock Interviews</p>
    </div>

    <div className="mini-card">
      <h3>82%</h3>
      <p>Resume Score</p>
    </div>

  </div>

</div>

      <div className="progress-card">

        <h2>Overall Progress</h2>

        <div className="progress-bar">

          <div className="progress-fill"></div>

        </div>

        <span>65% Completed</span>

      </div>

      <div className="dashboard-grid">

        {modules.map((module, index) => (

          <div className="dashboard-card" key={index}>

            <div className="dashboard-icon">
              {module.icon}
            </div>

            <h3>{module.title}</h3>

            <p>{module.description}</p>

          </div>

        ))}

      </div>

      <div className="bottom-section">

        <div className="goals">

          <h2>Today's Goals</h2>

          <ul>

            <li><FaCheckCircle /> Solve 5 DSA Questions</li>

            <li><FaCheckCircle /> Practice 20 Aptitude Questions</li>

            <li><FaCheckCircle /> Revise DBMS</li>

            <li><FaCheckCircle /> Apply to 2 Companies</li>

          </ul>

        </div>

        <div className="extra-section"> 

          <div className="timeline-card">

  <h2>📅 Recent Activity</h2>

  <div className="timeline">

    <div className="timeline-item">
      <div className="dot"></div>
      <div>
        <h4>Resume Uploaded</h4>
        <p>Today • 10:30 AM</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="dot"></div>
      <div>
        <h4>Aptitude Test Completed</h4>
        <p>Yesterday • Score: 18/20</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="dot"></div>
      <div>
        <h4>DBMS Revision Finished</h4>
        <p>2 Days Ago</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="dot"></div>
      <div>
        <h4>Mock Interview Attempted</h4>
        <p>3 Days Ago</p>
      </div>
    </div>

  </div>

</div>

  <div className="company-card">

    <h2>🏢 Upcoming Companies</h2>

    <div className="company">

      <h3>TCS</h3>

      <span>Expected : August 2026</span>

    </div>

    <div className="company">

      <h3>Infosys</h3>

      <span>Expected : September 2026</span>

    </div>

    <div className="company">

      <h3>Capgemini</h3>

      <span>Expected : September 2026</span>

    </div>

  </div>



  <div className="todo-card">

    <h2>📌 Today's Tasks</h2>

    <label>
      <input type="checkbox" />
      Solve 5 DSA Questions
    </label>

    <label>
      <input type="checkbox" />
      Practice Aptitude
    </label>

    <label>
      <input type="checkbox" />
      Revise DBMS
    </label>

    <label>
      <input type="checkbox" />
      Apply to Companies
    </label>

  </div>

</div>

        <div className="activity">

          <h2>Recent Activity</h2>

          <ul>

            <li>📄 Resume Uploaded</li>

            <li>🧠 Aptitude Test Completed</li>

            <li>💼 Interview Questions Practiced</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;