import { useState } from "react";
import "../styles/ResumeAnalyzer.css";

function ResumeAnalyzer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setMessage("");
    setShowResult(false);
  };

  const handleAnalyze = () => {
    if (!selectedFile) {
      setMessage("Please upload your resume first.");
      setShowResult(false);
      return;
    }

    setMessage("Resume uploaded successfully!");
    setShowResult(true);
  };

  return (
    <div className="resume-container">
      <h1>Resume Analyzer</h1>

      <p>Upload your resume in PDF format.</p>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />

      {selectedFile && (
        <p>
          Selected File: {selectedFile.name}
        </p>
      )}

      <div className="upload-box">
        Drag and Drop your Resume Here
      </div>

      <p>Accepted format: PDF only.</p>

      <button onClick={handleAnalyze}>
        Analyze Resume
      </button>

      {message && <h3>{message}</h3>}

      {showResult && (
        <div className="result-box">
          <h2>ATS Score : 85 / 100</h2>

          <h3>Strengths</h3>
          <ul>
            <li>Good DSA Skills</li>
            <li>Good Projects</li>
          </ul>

          <h3>Weaknesses</h3>
          <ul>
            <li>No Internship Experience</li>
            <li>Missing React Keywords</li>
          </ul>

          <h3>Suggestions</h3>
          <ul>
            <li>Add GitHub Link.</li>
            <li>Add Technical Skills Section.</li>
          </ul>

          <h3>Placement Readiness : 8 / 10</h3>
        </div>
      )}
    </div>
  );
}

export default ResumeAnalyzer;