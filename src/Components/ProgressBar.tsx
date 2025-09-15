import React from "react";

import "./ProgressBar.css";



interface ProgressBarProps {

  step: number;

}



const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {

  const steps = [1, 2, 3];



  return (

    <div className="progress-bar">

      {steps.map((s) => (

        <div

          key={s}

          className={`progress-step ${step >= s ? "active" : ""}`}

        ></div>

      ))}

    </div>

  );

};



export default ProgressBar;