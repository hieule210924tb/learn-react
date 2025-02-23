import {  memo } from "react";

function Content() {
   
   console.log('Re-render');
   
    return (
        <div>
             <h2>Xin chào mọi người  </h2>
        </div>
    );
}

export default memo(Content);
