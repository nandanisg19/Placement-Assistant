import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1>Welcome Back!</h1>

      <input type="email" placeholder="Enter your email" />

      <input type="password" placeholder="Enter your password" />

      <div className="login-options">
        <label>
          <input type="checkbox" />
          Remember Me
        </label>

        <Link to="/forgot-password">
          Forgot Password?
        </Link>
      </div>

      <button onClick={() => navigate("/dashboard")}>
        Login
      </button>

      <p>
        Don't have an account?{" "}
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;