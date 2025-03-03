import { useReducer, useRef, useState } from "react";
import  reducer,{initState } from './reducer'
import {setJob, addJob, deleteJob, editJob} from './actions'

// 4. Dispatch
function App() {
       const [state, dispatch] = useReducer(reducer,initState)
       const focusRef = useRef()
       const {job, jobs} = state
       const [editIndex, setEditIndex] = useState(null);
       const handleSubmit =() =>{
         if(editIndex !== null){
           dispatch(editJob(editIndex, job));
           setEditIndex(null);
         }else {
           dispatch(addJob(job));
         }
         dispatch(setJob(''))
         focusRef.current.focus()
       }
       const handleEdit = (index) => {
         setEditIndex(index);
         dispatch(setJob(jobs[index]));
         focusRef.current.focus();
     };
    return(
      <div style={{padding:'30px'}}>
          <h1>Todo List with useReducer</h1>
          <input 
             ref={focusRef}
             value={job}
             placeholder="Enter Todo ..."
             onChange={(e) =>{
                 dispatch(setJob(e.target.value))
             }}
          />
          <button
              onClick={handleSubmit}
            >{editIndex !== null ? 'Update' : 'Add'}
          </button>
          <ul>
            {
              jobs.map((job, index) =>(
                <li key={index}> {job} 
                  <span  style={{ marginLeft: '10px', cursor: 'pointer', color: 'red' }} onClick={()=>{dispatch(deleteJob(index))}}>&times;</span>
                  <span style={{ marginLeft: '10px', cursor: 'pointer', color: 'blue' }}onClick={() => handleEdit(index)}>Edit </span>
                </li>
              ))
            }
          </ul>
    </div>
    )
}

export default App;
