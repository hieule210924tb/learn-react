import Button from './component/Button'

function App(){
  
  return (
     <div style={{ padding:'0 30px'}}>
         <Button primary/>
         <Button secondary/>
         <Button success/>
         <Button danger/>
         <Button warning disabled/>
     </div>
  )
}

export default App