import { useEffect, useState } from "react";

function Content() {
    const [avatar, setAvatar] =useState()

    const handleImg = (e) =>{
       const file = e.target.files[0] //Lấy tệp hình ảnh đầu tiên mà người dùng chọn (e.target.files[0])
       setAvatar(URL.createObjectURL(file)) //Tạo URL tạm thời và  lưu vào state
    }
    useEffect(()=>{
        // URL.revokeObjectURL(avatar) giúp giải phóng bộ nhớ khi avatar thay đổi hoặc component bị unmount.
       return ()=>{ //Khi chọn ảnh khác, ảnh cũ sẽ được giải phóng bộ nhớ.
       URL.revokeObjectURL(avatar)
       }
       
    },[avatar])
    return (
        <div>
            <input 
             type="file"
             onChange={handleImg}
            />   
            {avatar && (<img src={avatar} alt="" width='20%' />)}            
        </div>
    );
}

export default Content;
