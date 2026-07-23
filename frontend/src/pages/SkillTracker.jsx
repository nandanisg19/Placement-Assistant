import "../styles/SkillTracker.css";

function SkillTracker() {
  return (
    <div className="skill-container">

      <h1>Skill Tracker</h1>

      <div className="skill-card">
        <h2>Technical Skills Progress</h2>

        <ul>
          <li>DSA - 70%</li>
          <li>Web Development - 60%</li>
          <li>DBMS - 80%</li>
          <li>Operating System - 50%</li>
          <li>Computer Networks - 40%</li>
        </ul>
      </div>


      <div className="skill-card">
        <h2>Placement Skills</h2>

        <ul>
          <li>Communication Skills - 75%</li>
          <li>Resume Building - 90%</li>
          <li>Interview Preparation - 65%</li>
          <li>Aptitude Preparation - 60%</li>
        </ul>
      </div>


      <div className="skill-card">
        <h2>Overall Placement Readiness</h2>

        <h3>78%</h3>
      </div>

    </div>
  );
}

export default SkillTracker;