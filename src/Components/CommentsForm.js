import { useState } from "react";

export default function CommentForm() {
    const [comment, setComment] = useState()
    const getvalue = (e) => {
        setComment((prv)=>({...prv,[e.target.name]:e.target.value, id: "hii"}))
    }
    const getdata = () =>{
        console.log(comment);
    }
  return (
    <div>
       <input type={`text`} name="name" onChange={getvalue}/>
       <input type={`email`} name="email" onChange={getvalue}/>
       <textarea name="des" onChange={getvalue}></textarea>
       <input type={`submit`} onClick={getdata}/>
    </div>
  );
}