import Content from './Content'
import './App.css'
import {ThemeContext} from './ThemeContext'
import { useContext } from 'react'
function App(){
  const context = useContext(ThemeContext)
  return (
     <div style={{ padding:'30px'}}>
        <button
         onClick={context.convertTheme}>Toggle theme</button>
        <Content/>
     </div>
  )
}

export default App