import logo from './logo.svg';
import './App.css';
import AddToDo from './todos/addTodo';

function App() {
  function todoAdded(todo) {
    console.log(`ToDo: ${todo}`);
  }
  return (
    <div className="App">
      <h1>Todos App</h1>
      <AddToDo todoAdded={todoAdded} />
    </div>
  );
}

export default App;
