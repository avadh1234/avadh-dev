import Link from "next/link";
import { useEffect, useState } from "react";
import fire from "../config/config";
import Pagination from "./Pagination";

export default function Bloglist() {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fire.firestore()
            .collection('blog')
            .onSnapshot(snap => {
                const blogs = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setBlogs(blogs);
            });
    }, []);

    return (
        <>
            {blogs.map((e,index) => {
                return (
                    <div className="col-lg-4 col-md-6 item" key={index}>
                        <div className="card">
                            <div className="card-header p-0 position-relative">
                                <Link href={e.urlstructure}>
                                    <img className="card-img-bottom d-block radius-image" src={e?.thumbnail ? e.thumbnail :"/about-bg.jpg"}
                                        alt="Card image cap" height="230px" />
                                </Link>
                                <div className="post-pos">
                                    <a href="#reciepe" className="receipe blue">How to</a>
                                </div>
                            </div>
                            <div className="card-body p-0 blog-details">
                                <Link href={e.urlstructure} className="blog-desc">{e?.posttitle}</Link>
                                <span className="post-date"><span className="fa fa-clock-o"></span> Oct 4, 2020</span>
                            </div>
                        </div>
                    </div>
                )
            })}
            {(blogs.length/12) > 1 && (
                <Pagination length={blogs}/>
            )}
        </>
    );
}