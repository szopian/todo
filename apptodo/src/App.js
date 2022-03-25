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

const addForm = document.querySelector(".add");
console.log(addForm);

addForm.addEventListener("", (e) => {
  e.preventDefault();
  const todo = addForm.add.value;
  console.log(todo);
});
