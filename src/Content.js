import { useEffect, useState } from "react";

function Content() {
    const [jobs, setJobs] = useState('')
    const [todoList, setToDoList] = useState([])
    const handleAdd =()=>{
        setToDoList(prev=> [...prev, jobs])
    }
    return (
        <div>
            <input
             onChange={(e) =>(setJobs(e.target.value))}
            />  
            <ul>
              {todoList.map((job)=>(<li key={job}>{job}</li>))}
            </ul>    
            <button
             onClick={handleAdd}
            >Add</button>     
        </div>
    );
}

export default Content;
