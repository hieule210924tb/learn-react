import {  memo } from "react";

function Content({onIncrease}) {
   
   console.log('Re-render');
   
    return (
        <div>
             <h2>Xin chào mọi người  </h2>
             <button onClick={onIncrease}>Click me!</button>
        </div>
    );
}

export default memo(Content);
