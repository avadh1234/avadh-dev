import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import Getdata from "./Getdata";
const avadh = [1,2,3,4]
export default function Homebloglist({posts}) {
    const [blogslist, setBlogslist] = useState([]);
    useEffect(() => {
        Getdata({limit : 4,})
        .then(res => setBlogslist(res))
    }, []);
    return (
        <div>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-md-10 col-lg-8 col-xl-7" >
                    {blogslist.map((e,index)=>{
                        return(
                       <div key={index}>
                        <div className="post-main" >
                            <div className="post-image">
                                <img src={e?.thumbnail ? e.thumbnail :"/about-bg.jpg"} />
                            </div>
                            <div className="post-preview">
                                <Link href={e.urlstructure}>
                                    <h2 className="post-title">{e?.posttitle}</h2>
                                    <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
                                </Link>
                                <p className="post-meta">
                                    Posted by
                                    <a href="#">Start Bootstrap</a>
                                    on {moment(e.Publishdate).format('LL')}
                                </p>
                            </div>
                        </div>

                        <hr className="my-4" />
                     </div>
                        )
                    })}
                    <div className="d-flex justify-content-end mb-4"><Link className="btn btn-primary text-uppercase" href="/blog">Older Posts →</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}