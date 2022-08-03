import { useState } from 'react';
import './App.css';

function App() {

  //INPUT STATES
   const [task, setTask] = useState('')
   const [updateTask, setUpdateTask] = useState('')


  //DO IT DEFAULT STATES
 const [doIt, setDoIt] = useState([
   { id: 1, label: "Build an App", status: false },
   { id: 2, label: "Go for a Run", status: false }
 ]);






  return (
    <div className="app">
      <h1 className='title'>Just Do It List</h1>
      hi
    </div>
  );
}

export default App;
