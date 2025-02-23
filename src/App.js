import { useState, memo } from "react";
import Content from './Content'

function App() {
  // const [show, setShow] = useState(false)
  const [count, setCount] = useState(60)
    
    const increase =()=>{
        setCount(count+1)
    }
 
   
    return (
      <div style={{padding:'30px'}}>
          <Content counts= {count} />
          <h1>{count}</h1>
          <button onClick={increase}>Click me!</button>
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
