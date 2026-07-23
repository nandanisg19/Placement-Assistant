import "../styles/CompanyPreparation.css";

function CompanyPreparation() {
  return (
    <div className="company-container">
      <h1>Company-wise Preparation</h1>

      <div className="company-card">
        <h2>TCS</h2>
        <ul>
          <li>Aptitude Preparation</li>
          <li>Coding Questions</li>
          <li>HR Interview Questions</li>
          <li>Communication Skills</li>
        </ul>
      </div>

      <div className="company-card">
        <h2>Infosys</h2>
        <ul>
          <li>OA Pattern</li>
          <li>Logical Reasoning</li>
          <li>Technical Interview Questions</li>
          <li>Resume Tips</li>
        </ul>
      </div>

      <div className="company-card">
        <h2>Accenture</h2>
        <ul>
          <li>Coding Round Preparation</li>
          <li>Aptitude Questions</li>
          <li>Communication Round</li>
          <li>Interview Preparation</li>
        </ul>
      </div>

      <div className="company-card">
        <h2>Amazon</h2>
        <ul>
          <li>DSA Preparation</li>
          <li>Leadership Principles</li>
          <li>Interview Questions</li>
          <li>Problem Solving Skills</li>
        </ul>
      </div>

      <div className="company-card">
        <h2>Microsoft</h2>
        <ul>
          <li>DSA and OOP</li>
          <li>DBMS and OS</li>
          <li>Technical Interview Questions</li>
          <li>Project Discussions</li>
        </ul>
      </div>
    </div>
  );
}

export default CompanyPreparation;