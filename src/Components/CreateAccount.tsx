import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import type { CreateAccountData } from "../types";
import "./CreateAccount.css"

interface CreateAccountProps {
  onContinue: (data: CreateAccountData) => void;
}

const CreateAccount: React.FC<CreateAccountProps> = ({ onContinue }) => {
  const [formData, setFormData] = useState<CreateAccountData>({
    phone: "",
    name: "",
    location: "Nigeria",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue(formData);
  };

  return (
<div className="page-create">
    <div className="card">
      <div className="logo">
        <img src="/images/Logo.png" alt="logo"/>
      </div>
         <h2>Create an Account</h2>
      <ProgressBar step={1} />
      <form onSubmit={handleSubmit}>
        <label>Phone Number</label>
        <div className="phone-row">

<select name="country"
value={formData.location}
onChange={handleChange}
>
  <option value="Nigeria">NGN</option>
  <option value="Ghana">GH</option>
  <option value="Kenya">KE</option>
</select>

        <input
          type="tel"
          name="phone"
          placeholder="+234 000-000-0000"
          value={formData.phone}
          onChange={handleChange}
       />
        </div>

<div className="side">
  <div className="full-name">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Olivia Smith"
          value={formData.name}
          onChange={handleChange}
        />
</div>
<div className="location">
        <label>Location</label>
        <select name="location" value={formData.location} onChange={handleChange}
       >
          <option value="Nigeria">Nigeria</option>
          <option value="Ghana">Ghana</option>
          <option value="Kenya">Kenya</option>
        </select>
        </div>
</div>

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="************"
          value={formData.password}
          onChange={handleChange}
      
        />

        <p className="character">At least 12 characters, no more than 20 characters.</p>

        <button type="submit">Continue</button>
      </form>

<div className="sign-in">
  <p>Already have an account? <a href="#">Sign in</a></p>
</div>

<div className="privacy">
  <p>By signing i confirm that i have carefully read and agree to the HUZZL</p>
  <p><a href="#">Privacy Policy and Terms of Services.</a></p>
</div>
    </div>
</div>
  );

};

export default CreateAccount;

