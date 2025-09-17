import React, { useState } from "react";
import "./SignIn.css"



interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };


  return (
    <div className="signin-container">
        
      {/* Left side with image */}
      <div className="signin-left">
        <div className="logo-huzzl">
            <img src="/images/Logo.png" alt="logo"/>
        </div>
        <img src="/images/worker.png" alt="Worker" className="login-image" />
        <a href="/" className="back-link">Back to Website <span>→</span></a>
      </div>


      {/* Right side with form */}
      <div className="signin-right">
        <h2>Log In to Your Account</h2>

        <div className="social-login">
           <button className="google">
                  <span className="google-icon"> <img src="./images/google.png" alt= "google-logo"/></span>
                  <span className="google-signin">Log In with Google</span>
                </button>
                <button className="apple">
                  <span className="apple-icon"> <img src="./images/apple.png" alt="apple-logo"/></span>
                   <span className="apple-signin">Log In with Apple</span>
                </button> </div>
<div className="divider"></div>
        <p className="or-text">or log in by using email address</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signin-btn">Log In</button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};


export default Login;