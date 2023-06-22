import './App.css';
import {Todo} from "./component/Todo";

function App() {
  return (
    <div className="App">
      <div className="container">
          <h1>Todo List</h1>
          <Todo/>
      </div>
    </div>
  );
}

export default App;
