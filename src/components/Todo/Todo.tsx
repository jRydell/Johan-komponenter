import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import ProgressBar from "../ProgressBar/ProgressBar";

function Todo() {
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
      <h2>Todo</h2>
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

export default Todo;
