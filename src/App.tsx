import "./App.scss";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { useState } from "react";
import confetti from "https://esm.run/canvas-confetti@1";

function App() {
  const [progress, setProgress] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setProgress(0 + value);
    confetti({
      particleCount: 50,
      spread: 360,
    });
  };

  return (
    <>
      <h1>ProgressBar</h1>
      <input
        type="number"
        placeholder="Change progress"
        onChange={handleChange}
        value={progress}
      />

      <ProgressBar title="Progress" percentage={progress} color={"green"} />
      {/* <ProgressBar title="Step 2" percentage={progress} color={"red"} />
      <ProgressBar title="Step 3" percentage={progress} color={"blue"} /> */}
    </>
  );
}

export default App;
