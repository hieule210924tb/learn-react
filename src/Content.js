import { useEffect, useState } from "react";

function Content() {
    const [lessonId , setLessonId] = useState(1)
    const lessons= [
        {
            id:1,
            name:'useEffect with fake Chat App'
        },
        {
            id:2,
            name:'useEffect with preview avatar'
        },
        {
            id:3,
            name:'useEffect with timer functions'
        },
    ]
    useEffect(()=>{
        const handleComment =({detail})=>{
              console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return()=>{
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    },[lessonId])
    return (
        <div>
            <ul>
             {
                lessons.map(lesson =>(
                <li 
                 key={lesson.id}
                 style={{color: lessonId === lesson.id ? 'red' :'#333'}}
                 onClick={()=>setLessonId(lesson.id)}
                >
                    {lesson.name}
                </li>))
             }  
            </ul>
        </div>
    );
}

export default Content;
