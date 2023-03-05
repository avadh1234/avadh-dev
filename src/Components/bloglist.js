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
    }, []);

    return (
        <>
            {blogs.map((e,index) => {
                return (
                    <div class="col-lg-4 col-md-6 item" key={index}>
                        <div class="card">
                            <div class="card-header p-0 position-relative">
                                <a href="#blog-single">
                                    <img class="card-img-bottom d-block radius-image" src="/about-bg.jpg"
                                        alt="Card image cap" height="230px" />
                                </a>
                                <div class="post-pos">
                                    <a href="#reciepe" class="receipe blue">How to</a>
                                </div>
                            </div>
                            <div class="card-body p-0 blog-details">
                                <a href="#blog-single" class="blog-desc">The only 12 curry recipes you’ll Ever Need
                                </a>
                                <span class="post-date"><span class="fa fa-clock-o"></span> Oct 4, 2020</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}