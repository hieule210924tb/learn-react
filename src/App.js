import { useState , useCallback} from "react";
import Content from './Content'

function App() {
  // const [show, setShow] = useState(false)
  const [count, setCount] = useState(60)
    
    const handleIncrease =useCallback(()=>{
        setCount(prevCount => prevCount+1)
    },[])
 
   
    return (
      <div style={{padding:'30px'}}>
          <Content onIncrease ={handleIncrease} />
          <h1>{count}</h1>
        </div>
    );
  // return (
  //   <div className="App" style={{padding:20}}>
  //     <button onClick={()=> setShow(!show)}>Togger</button>
  //     {show && <Content/>}
  //   </div>
  // );
}

export default App;
