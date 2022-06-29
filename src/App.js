import './App.css';
import Logo from './components/Logo'
import Task from './components/Task'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="task-main-list">
        <h1> My Tasks </h1>
        <Form />
        <Task 
          text='algo'
        />
        
      </div>
    </div>
  );
}

export default App;
