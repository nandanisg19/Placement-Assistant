import "../styles/Features.css";

function Features() {
  return (
    <div className="features-container">
      <h2>Our Features</h2>

      <div className="feature-box">
        <h3>AI Resume Analyzer</h3>
        <p>Get suggestions to improve your resume.</p>
      </div>

      <div className="feature-box">
        <h3>Interview Preparation</h3>
        <p>Practice technical and HR interview questions.</p>
      </div>

      <div className="feature-box">
        <h3>Placement Roadmap</h3>
        <p>Follow a structured roadmap for placement preparation.</p>
      </div>

      <div className="feature-box">
        <h3>Aptitude Practice</h3>
        <p>Improve your problem-solving and aptitude skills.</p>
      </div>
    </div>
  );
}

export default Features;