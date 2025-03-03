import {SET_JOB, ADD_JOB, DELETE_JOB, EDIT_JOB} from './constants'

export  const initState = {
    job: '', 
    jobs: []
}


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


export default reducer