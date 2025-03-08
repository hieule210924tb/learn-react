import { ADD_TODO, DELETE_TODU, SET_TODO_INPUT, UPDATE_TODU } from './constants'

const initState ={
    todus : [],
    toduInput :''
}

function reducer(state, action){
   switch(action.type){
      case SET_TODO_INPUT:
            return {
                ...state,
                toduInput: action.payload
        }
        case ADD_TODO:
            return {
                ...state,
                todus:[...state.todus, action.payload]
            }
        case DELETE_TODU :
           const  newState = [...state.todus];
           newState.splice(action.payload,1)
              return {
                ...state,
                todus: newState
           }
        case UPDATE_TODU:
            const  newStateUpdate = [...state.todus];
            newStateUpdate[action.index] = action.payload;
            return{
                ...state,
                todus: newStateUpdate
            }
        default:
               throw new Error('Invalid action')
            }
}
export {initState}
export default reducer