import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//fack comment
function emitComment(id){
      setInterval(()=>{
        window.dispatchEvent(
          new CustomEvent(`lesson-${id}`,{
            detail:` Nội dung comment của lesson-${id}` //detail phát đi cái nào , thì nhận lại CustomEvent cái đó
          })
        )
      },2000)
}
emitComment(1)
emitComment(2)
emitComment(3)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
