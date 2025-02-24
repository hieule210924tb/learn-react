import { useState , useMemo, useRef} from "react";
import Content from './Content'

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef() // thêm useRef() để khi add xong nó tự focus vào thẻ input
  const handleSubmit = () =>{
      setProducts([...products,{
        name,
        price: parseInt(price) // đổi sang dạng số
      }])
      setName('')
      setPrice('')
      nameRef.current.focus()
  }
  
   const total = useMemo(()=>{
      const result=  products.reduce((result, prod)=>{
        return  result + prod.price
    }
    ,0)
    return result
   },[products])


  return(
    < div style={{padding:'30px'}}>
       <input
         ref={nameRef}
         value={name}
         placeholder="Nhập tên sản phẩm"
         onChange={(e) => setName(e.target.value)}
       />
       <br />
       <input
        value={price}
        placeholder="Nhập giá sản phẩm"
         onChange={(e) => setPrice(e.target.value)}
       />
        <br />
        Total: {total}
        <br />
       <button 
         onClick={handleSubmit}
       >Add</button>
       <ul>
       {
        products.map((product, index) =>(
          <li key={index}>{product.name} - {product.price}</li>
        ))
       }
       </ul>
   </div>
  )
}

export default App;
