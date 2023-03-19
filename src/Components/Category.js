import { useState } from "react";


const category = [
    {
        category : "HTML",
        icon : "1"
    },
    {
        category : "CSS",
        icon : "2"
    },
    {
        category : "Javascript",
        icon : "3"
    },
    {
        category : "React.js",
        icon : "4"
    },
    {
        category : "Next.js",
        icon : "5"
    },
    {
        category : "JQuary",
        icon : "6"
    },
    {
        category : "SEO",
        icon : "7"
    },
    {
        category : "Make Money",
        icon : "7"
    },
]
export default function Category(props) {
    const {onchange , Categorys} = props;
    const handleclick = (e) => {
        props.setcategorys(e)
    }
  return (
    <div className="category-main">
     <div className="container">
        <div className="d-flex align-items-center">
        <input type="text" className="col-md-4" placeholder="Search heare" onChange={onchange}/>
         <button className="btn btn-primary ms-3">Search</button>
        </div>
         <ul className="d-flex flex-wrap mt-4 gap-3">
            {category.map((e,index)=>{
                return(
                    <li key={index} className={`d-inline-flex `} >
                        <button className={`category-items ${Categorys == e.category ? "bg-primary text-white": ""}`} onClick={()=>handleclick(e.category)}>
                             {/* <div>{e.icon}</div> */}
                             <div>{e.category}</div>
                        </button>
                </li>
                )
            })}
         </ul>
     </div>
    </div>
  );
}