import "./App.scss";
import Form from "./components/form";
import Header from "./components/header";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div className="App container">
      <Header />
      <TodoList />
      <Form />
    </div>
  );
}

export default App;
