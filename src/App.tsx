import "./App.scss";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  return (
    <>
      <h1>Komponent</h1>
      <ProgressBar percentage={75} title="Loading" />
    </>
  );
}

export default App;
