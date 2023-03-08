import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";
import Shareicon from "./Shareicon";

export default function Blogdetails(props) {
    const [location , setLocation] = useState()
    const { entry } = props;
    useEffect(()=>{
      setLocation(window.location.href);
    })
    console.log(location);
    return (
        <div>
            <div class="masthead">
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="post-heading">
                                <h1>{entry?.posttitle}</h1>
                                <span class="meta">
                                    Posted by
                                    <a href="#!">{entry.authorname}</a>
                                    on {entry.Publishdate}
                                </span>
                                <img src={entry.thumbnail} width="100%" />
                            </div>
                            <article class="mt-4">
                        
                                    <div dangerouslySetInnerHTML={{ __html: entry.bodyvalue }}>

                                    </div>
                                
                            </article>
                        </div>

                    </div>
                </div>
            </div>
            <Shareicon link={location}/> 
            <Comments />
        </div>
    );
}