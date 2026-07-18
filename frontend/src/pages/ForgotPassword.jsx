import "../styles/ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="forgot-container">
      <h1>Reset Your Password</h1>

      <p>
        Enter your registered email address. We'll send you a password reset link.
      </p>

      <input
        type="email"
        placeholder="Enter your email address"
      />

      <button>Send Reset Link</button>
    </div>
  );
}

export default ForgotPassword;