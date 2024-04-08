import "./App.scss";
import Checkbox from "./components/Checkbox/Checkbox";

import ProgressBar from "./components/ProgressBar/ProgressBar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setProgress(value);
  };

  let todos = [
    "Finish homework",
    "Go grocery shopping",
    "Call mom",
    "Workout for 30 minutes",
    "Read a chapter of a book",
  ];

  return (
    <>
      <h1>ProgressBar</h1>
      <input
        type="number"
        placeholder="Change progress"
        onChange={handleChange}
        value={progress}
      />

      <article className="todo">
        <h2>My Todos:</h2>
        {todos.map((todo, index) => (
          <Checkbox key={index} title={todo} big={true} />
        ))}
      </article>
      <ProgressBar title="Progress" percentage={progress} color={"green"} />
      {/* <ProgressBar title="Step 2" percentage={progress} color={"red"} />
      <ProgressBar title="Step 3" percentage={progress} color={"blue"} /> */}
    </>
  );
}

export default App;
