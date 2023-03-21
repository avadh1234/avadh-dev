import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import Category from "./Category";
import Getdata from "./Getdata";
import Pagination from "./Pagination";

export default function Bloglist() {

    const [blogs, setBlogs] = useState([]);
    const [search , setSearch] =useState()
    const [currentPage, setCurrentPage] =useState(1)
    const [category, setcategory] = useState();
    const pageSize = 2;
    useEffect(() => {
        Getdata({query:search,category:category})
        .then(res => {setBlogs(res)})
    }, [search,category]);

    const onPageChange = (page) => {
        setCurrentPage(page);
      };


       const paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return items.slice(startIndex, startIndex + pageSize);
       };
      
    return (
        <>
         <Category
          onchange={e => setSearch(e.target.value)}
          setcategorys={setcategory}
          Categorys={category}
         />
         <div className="container px-5">
            <div className="row">
            {blogs && paginate(blogs,currentPage, pageSize).map((e,index) => {
                return (
                    <div className="col-lg-4 col-md-6 item" key={index}>
                        <div className="card">
                            <div className="card-header p-0 position-relative">
                                <Link href={e?.urlstructure}>
                                    <img className="card-img-bottom d-block radius-image" src={e?.thumbnail ? e.thumbnail :"/about-bg.jpg"}
                                        alt="Card image cap" height="230px" />
                                </Link>
                                <div className="post-pos">
                                    <a href="#reciepe" className="receipe blue">{e?.selectcategory}</a>
                                </div>
                            </div>
                            <div className="card-body p-0 blog-details">
                                <Link href={e?.urlstructure} className="blog-desc">{e?.posttitle}</Link>
                                <span className="post-date"><span className="fa fa-clock-o"></span>{moment(e.Publishdate).format('LL')}</span>
                            </div>
                        </div>
                    </div>
                )
            })}</div>
            </div>
                <Pagination 
                
                length={blogs.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
                
                />
        </>
    );
}