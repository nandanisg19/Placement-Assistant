import "../styles/Aptitude.css";

function Aptitude() {
  return (
    <div className="aptitude-container">
      <h1>Aptitude Preparation</h1>

      <div className="aptitude-card">
        <h2>Quantitative Aptitude</h2>

        <p>Topics:</p>

        <ul>
          <li>Percentage</li>
          <li>Ratio and Proportion</li>
          <li>Profit and Loss</li>
          <li>Time and Work</li>
          <li>Simple and Compound Interest</li>
        </ul>

        <button>Start Practice</button>
      </div>

      <div className="aptitude-card">
        <h2>Logical Reasoning</h2>

        <p>Topics:</p>

        <ul>
          <li>Coding-Decoding</li>
          <li>Blood Relations</li>
          <li>Seating Arrangement</li>
          <li>Puzzles</li>
          <li>Direction Sense</li>
        </ul>

        <button>Start Practice</button>
      </div>

      <div className="aptitude-card">
        <h2>Verbal Ability</h2>

        <p>Topics:</p>

        <ul>
          <li>Grammar</li>
          <li>Vocabulary</li>
          <li>Reading Comprehension</li>
          <li>Sentence Correction</li>
          <li>Para Jumbles</li>
        </ul>

        <button>Start Practice</button>
      </div>
    </div>
  );
}

export default Aptitude;