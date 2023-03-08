import Link from "next/link";
import { useEffect, useState } from "react";
import fire from "../config/config";

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
            console.log(blogs);
    }, []);

    return (
        <>
            {blogs.map((e,index) => {
                return (
                    <div class="col-lg-4 col-md-6 item" key={index}>
                        <div class="card">
                            <div class="card-header p-0 position-relative">
                                <Link href={e.urlstructure}>
                                    <img class="card-img-bottom d-block radius-image" src={e?.thumbnail ? e.thumbnail :"/about-bg.jpg"}
                                        alt="Card image cap" height="230px" />
                                </Link>
                                <div class="post-pos">
                                    <a href="#reciepe" class="receipe blue">How to</a>
                                </div>
                            </div>
                            <div class="card-body p-0 blog-details">
                                <Link href={e.urlstructure} class="blog-desc">{e?.posttitle}</Link>
                                <span class="post-date"><span class="fa fa-clock-o"></span> Oct 4, 2020</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}