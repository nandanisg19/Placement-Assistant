import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Aptitude from "./pages/Aptitude";
import Interview from "./pages/Interview";
import Roadmap from "./pages/Roadmap";
import SkillTracker from "./pages/SkillTracker";
import CompanyPreparation from "./pages/CompanyPreparation";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
      <Route path="/aptitude" element={<Aptitude />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/skill-tracker" element={<SkillTracker />} />
      <Route path="/company-preparation" element={<CompanyPreparation />} />
    </Routes>
  );
}

export default App;