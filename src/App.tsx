import React, { useState } from "react";
import CreateAccount from "./Components/CreateAccount";
import ProfileSetup from "./Components/ProfileSetup";
import ServiceListing from "./Components/ServiceListing";
import SuccessPage from "./Components/SuccessPage";
import type { Step } from "./types";
import "./App.css";


const App: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [userData, setUserData] = useState<Record<string, any>>({});
  const handleContinue = (data: object) => {
    setUserData({ ...userData, ...data });
    setStep((prev) => (prev < 4 ? (prev + 1) as Step : prev));
  };

  const handleFinish = (data: object) => {
    const finalData = { ...userData, ...data };
    console.log("Final Signup Data:", finalData);
   setStep(4);
  };

  return (
    <div className="app-container">
      {step === 1 && <CreateAccount onContinue={handleContinue} />}
      {step === 2 && <ProfileSetup onFinish={handleContinue} />}
      {step === 3 && <ServiceListing onSubmit={handleFinish} />}
      {step === 4 && <SuccessPage/>}
    </div>
  );
};

export default App;

