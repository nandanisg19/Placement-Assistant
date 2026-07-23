import "../styles/Interview.css";

function Interview() {
  return (
    <div className="interview-container">

      <h1>Interview Preparation</h1>

      <div className="interview-card">
        <h2>HR Interview Questions</h2>

        <ul>
          <li>Tell me about yourself.</li>
          <li>Why should we hire you?</li>
          <li>What are your strengths and weaknesses?</li>
          <li>Where do you see yourself in 5 years?</li>
        </ul>

        <button>Start Practice</button>
      </div>


      <div className="interview-card">
        <h2>Technical Interview Preparation</h2>

        <ul>
          <li>DSA Questions</li>
          <li>DBMS Questions</li>
          <li>Operating System Questions</li>
          <li>Computer Networks Questions</li>
          <li>OOP Questions</li>
        </ul>

        <button>Start Practice</button>
      </div>


      <div className="interview-card">
        <h2>Mock Interview</h2>

        <p>
          Practice common interview questions and improve your
          communication skills.
        </p>

        <button>Start Mock Interview</button>
      </div>

    </div>
  );
}

export default Interview;