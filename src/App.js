import {useStore , actions} from './store'
import { useRef ,useState} from 'react';
import { addToDu, deleteToDu, setToDuInput, updateToDu } from './store/actions';
function App(){
  const [state, dispatch]  = useStore()
  const {todus, toduInput} = state
  const focusRed = useRef()
  const [updateIndex, setUpdateIndex] = useState(null);
  console.log('toduInput:',toduInput);
  const handleAdd =() =>{
    if(updateIndex !== null){
      dispatch(updateToDu(updateIndex, toduInput))
      setUpdateIndex(null)
    }else{
      dispatch(addToDu(toduInput))
    }
    dispatch(setToDuInput(''))
    focusRed.current.focus()
  }
  const handleUpdate =(index) =>{
    setUpdateIndex(index)
    dispatch(setToDuInput(todus[index]))
    focusRed.current.focus()
  }
  return (
     <div style={{ padding:'30px'}}>
      <h2>ToDoList</h2>
      <input
       ref={focusRed}
       value={toduInput}
       placeholder='Enter todo ...'
       onChange={e =>{
        dispatch(actions.setToDuInput(e.target.value))
       }}
      />
      <button onClick={handleAdd}>Add</button>
    <ul>
      {
        todus.map((todu, index)=>(
         <li key={index}>{todu}
           <span style={{ marginRight:5, cursor: 'pointer', color: 'red'}} onClick={()=>{dispatch(deleteToDu(index))}} >&times;</span>
           <span style={{ marginRight:5, cursor: 'pointer', color: 'blue'}} onClick={() =>handleUpdate(index)}>Update</span>
         </li>
        ))
      }
    </ul>
     </div>
  )
}

export default App