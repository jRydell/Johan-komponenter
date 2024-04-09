import "./App.scss";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <>
      <h1>Komponenter</h1>
      <Todo />
      <Header />
      <Form />
    </>
  );
}

export default App;
