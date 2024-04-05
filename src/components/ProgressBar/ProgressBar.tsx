import React, { useState, useEffect } from "react";
import "./ProgressBar.scss";

type ProgressBarProps = {
  percentage: number;
  title: string;
  color: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  title,
  color,
}) => {
  // State to manage the progress internally
  const [progress, setProgress] = useState<number>(0);

  // Update the progress state when the percentage prop changes
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <>
      <div className="ProgressBar">
        <h2>
          {title}: {progress}
        </h2>
        <div className="progress-bar-container">
          <div
            style={{ width: `${progress}%`, backgroundColor: color }}
            className="progress-bar"
          />
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
