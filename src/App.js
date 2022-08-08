import { useState } from 'react';
import { Fragment } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareCheck,
  faPenSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function App() {

  //INPUT STATES
   const [task, setTask] = useState('')
   const [updateTask, setUpdateTask] = useState('')


  //DO IT DEFAULT STATES
 const [doIt, setDoIt] = useState([
   {
     id: 1,
     label:
       "Build a new app",
     status: false,
   },
   { id: 2, label: "Go for a Run", status: false },
 ]);


 // SUBMIT FUNCTIONS
   const handleChange = (e) => {
     setTask(e.target.value);
   };

   const handleSubmit = (e) => {
      if (task) {
        let num = doIt.length + 1 
        setDoIt([...doIt, { id: num, label: task, status: false }]);
      }
     e.preventDefault();
     setTask(""); 
   };




  return (
    <div className="app">
      <h1 className="title">Just Do It</h1>
      <form onSubmit={handleSubmit} className="doit-form">
            <input
              placeholder="Add a Do-it"
              value={task}
              onChange={handleChange}
              name="text"
              className="doit-input"
            />
            <button onClick={handleSubmit} className="doit-button">
              Add Do-It
            </button>
      </form>
      {doIt &&
        doIt
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <Fragment key={task.id}>
                <div className="do-it">
                  <div className={task.status ? "finished" : ""}>
                    <span className="doitNumber">{index + 1}</span>
                    <div className="doitText">{task.label}</div>
                  </div>
                  <div className="icons">
                    <span title="Did It">
                      <FontAwesomeIcon icon={faSquareCheck} />{" "}
                    </span>

                    {task.status ? null : (
                      <span title="Edit">
                        <FontAwesomeIcon icon={faPenSquare} />{" "}
                      </span>
                    )}

                    <span title="Delete">
                      <FontAwesomeIcon icon={faTrash} />{" "}
                    </span>
                  </div>
                </div>
              </Fragment>
            );
          })}
      <div></div>
    </div>
  );
}

export default App;
