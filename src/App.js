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
       "Build a new hwiue urhw eiuhg wu hwiughruw gu wui ghiu h ru urehur ur ru riu ru u  ubrbw tbhu bhwbe wb tbtb tbetw  ther tejyyjj jty e jeyj yjeejy jej ej jy eyje y jetyjetj yej y jeyjy jytje yeyjeyje tyteyjytjty j eytejyjjy app",
     status: false,
   },
   { id: 2, label: "Go for a Run", status: false },
 ]);



  return (
    <div className="app">
      <h1 className='title'>Just Do It List</h1>
      {doIt && doIt.sort((a, b) => a.id > b.id ? 1 : -1).map( (task, index) => {
        return (
          <Fragment key={task.id}>
            <div className="do-it">
              <div className={task.status ? "finished" : ""}>
                <span className="doitNumber">{index + 1}</span>
                <div className="doitText">{task.label}</div>
              </div>
              <div className="icons">
                <span>
                  <FontAwesomeIcon icon={faSquareCheck} />{" "}
                </span>

                {task.status ? null : (
                  <span>
                    <FontAwesomeIcon icon={faPenSquare} />{" "}
                  </span>
                )}

                <span>
                  <FontAwesomeIcon icon={faTrash} />{" "}
                </span>
              </div>
            </div>
          </Fragment>
        );
      })}
      <div>

      </div>
    </div>
  );
}

export default App;
