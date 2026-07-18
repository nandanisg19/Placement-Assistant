import "../styles/Hero.css";

function Hero() {
  return (
    <div className="container">
      <h1>Placement Assistant</h1>

      <p>
        Your AI-powered companion for placement preparation.
        Prepare smarter, practice better, and get placed confidently.
      </p>

      <div className="buttons">
        <button>Get Started</button>
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default Hero;