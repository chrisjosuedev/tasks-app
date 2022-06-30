import './App.css';
import Logo from './components/Logo'
import TasksList from './components/TasksList'

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="task-main-list">
        <h1> My Tasks </h1>
        <TasksList />
      </div>
    </div>
  );
}

export default App;
