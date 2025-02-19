import { useEffect, useState } from "react"

function Content(){
  const [state, setState] = useState(0)
  const [action, setAtion]= useState('')
  const [resize, setResize] = useState(window.innerWidth)
  const [scroll, setScroll] = useState(false)
  const [post, setPost] = useState([])
    useEffect(()=>{
        document.title = `you has click ${state}`
        console.log('useEffect');
    },[action])
    useEffect(()=>{
        const handleResize= ()=>{
            setResize(window.innerWidth)
        }
           window.addEventListener('resize', handleResize)

        return()=>{
            window.removeEventListener('resize', handleResize)  
        }
    },[resize])
    useEffect(()=>{
        const handleSroll = () =>{
            window.scrollY >=200 ? setScroll(true) : setScroll(false)
        }
            window.addEventListener('scroll', handleSroll)
            return()=>{
            window.removeEventListener('scroll', handleSroll)
            }
    },[scroll])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(shows =>{
           setPost(shows) 
    })
},[])
    return(
        <div>
            <h1>{state}</h1>
            <button
             onClick={()=>setState(state+1)}
            >Click me!</button>
            <button onClick={()=> setAtion('User')}>Get Users</button>
            <button onClick={()=> setAtion('Comment')}>Get Comments</button>
            <p>{`Chiều ngang của màn hình ${resize}`}</p>
            <ul>
                {post.map(posts =>(<li key={posts.id}>{posts.title}</li>))}
            </ul>
            {scroll && <button 
              style={{
                position:'fixed',
                right:'30px',
                bottom:'30px'
              }}
            >ShowGoToTop</button>}
        </div>
    )
}

export default Content  