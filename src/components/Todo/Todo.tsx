import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import ProgressBar from "../ProgressBar/ProgressBar";
import confetti from "https://esm.run/canvas-confetti@1";

const Todo = () => {
  const [todos, setTodos] = useState([
    { title: "Workout for 30 minutes", isChecked: false },
    { title: "Read a chapter of a book", isChecked: false },
    { title: "Go grocery shopping", isChecked: false },
    { title: "Call mom", isChecked: false },
    { title: "Finish homework", isChecked: false },
    { title: "Workout for 30 minutes", isChecked: false },
    { title: "Call mom", isChecked: false },
    { title: "Read a chapter of a book", isChecked: false },
    { title: "Clean the house", isChecked: false },
    { title: "Plan next week's schedule", isChecked: false },
    { title: "Write in journal", isChecked: false },
    { title: "Learn a new recipe", isChecked: false },
  ]);
  const [progress, setProgress] = useState(0);

  const handleCheckboxChange = (index: number) => {
    setTodos((todos) => {
      todos[index] = {
        ...todos[index],
        isChecked: !todos[index].isChecked,
      };
      return [...todos];
    });

    const checkedCount = todos.filter((todo) => todo.isChecked).length;
    const newProgress = Math.floor((checkedCount / todos.length) * 100);
    setProgress(newProgress);
    if (todos[index].isChecked) {
      // Trigger confetti
      confetti({
        particleCount: 1500,
        spread: 360,
      });
    }
  };

  return (
    <>
      <article className="todo">
        <h2>Todos:</h2>
        {todos.map((todo, index) => (
          <Checkbox
            key={index}
            title={todo.title}
            isChecked={todo.isChecked}
            big={true}
            onChange={() => handleCheckboxChange(index)}
          />
        ))}
        <ProgressBar title="Progress" percentage={progress} color={"green"} />
      </article>
    </>
  );
};

export default Todo;
