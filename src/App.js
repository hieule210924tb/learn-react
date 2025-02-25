import { useReducer} from "react";
// import Content from './Content'
//  1 .Phân tích bài toán với useState
// 1.1 . Init state =0
// 1.2 . Actions : down(state -1) / up(sate +1)
//  2 .Phân tích bài toán với useReducer
// 2.1 . Init state =0
// 2.2 . Actions : down(state -1) / up(sate +1)
// 2.3 . Tạo ra Reducer
// 2.4 . Dispatch (là một thuật ngữ để đi kích hoạt Reducer)


 // B1 : Tạo init state = 0
   const initState =0
 // B2 : Actions
   const UP_ACTION = 'up'
   const DOWN_ACTION = 'down'
 // B2 :Tạo Reducer
   const reducer = (state, action) =>{
       switch(action){
           case UP_ACTION:
            return state + 1;
           case DOWN_ACTION:
              return state - 1;
          default:
             throw new Error('Invalid action')
       }
   }
function App() {
   const [count, dispatch] = useReducer(reducer, initState)
 
    return(
      <div style={{padding:'30px'}}>
          <h1>{count}</h1>

          <button 
             onClick={()=>dispatch(DOWN_ACTION)}
            >Down
            </button>
          <button 
            onClick={()=>dispatch(UP_ACTION)}
            >Up
          </button>
    </div>
    )
}

export default App;
