import { useReducer, useRef, useState } from "react";
 //1 . init state
 const initState = {
     job: '', 
     jobs: []
 }
  // 2. Actions
  const SET_JOB = 'set_job'
  const ADD_JOB = 'add_job' 
  const DELETE_JOB = 'delete_job' 
  const EDIT_JOB = 'edit_job'
  // 3. Recducer
  const setJob = payload =>{
        return {
          type: SET_JOB,
          payload
        }
  }
  const addJob = payload =>{
    return {
      type: ADD_JOB,
      payload
    }
}
const deleteJob = payload =>{
  return {
    type: DELETE_JOB,
    payload
  }
}
const editJob =(index, payload) =>{
  return {
    type: EDIT_JOB,
    index,
    payload
  }
}

console.log(setJob('Rửa bát'));
  const reducer = (state, action) =>{
    console.log('Action :', action);
    console.log('State :', state);
    let newState 
     switch(action.type){
      case SET_JOB:
        newState=
          {
            ...state,
          job: action.payload 
          }
         break
        case ADD_JOB  :
          newState= {
            ...state,
            jobs :[...state.jobs, action.payload]
          }
          break
          case DELETE_JOB  :
            const newJobs =[...state.jobs ]
            newJobs.splice(action.payload,1)
            newState ={
              ...state,
              jobs: newJobs
            }
            break
          case EDIT_JOB:
            const newJobsEdit =[...state.jobs ]
            newJobsEdit[action.index] = action.payload;
            newState = { ...state, jobs: newJobsEdit };
            break
        default :
        throw new Error('Invalid action .')
     }
     console.log('NewState',newState);
     return newState
    }
function App() {
 // 4. Dispatch
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
