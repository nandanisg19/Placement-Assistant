import "../styles/Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <h1>Create Your Account</h1>

      <input type="text" placeholder="Enter your full name" />

      <input type="email" placeholder="Enter your email" />

      <input type="password" placeholder="Create password" />

      <input type="password" placeholder="Confirm password" />

      <button>Sign Up</button>

      <p>Start your placement journey today!</p>
    </div>
  );
}

export default Signup;