import moment from "moment/moment";
import Head from "next/head";
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
    return (
        <>
        <Head>
        <title>{entry?.pagetitle}</title>
        <meta name="description" content={entry?.metadescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={entry?.pagetitle}/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content={location}/>
        <meta property="og:title" content={entry?.pagetitle}/>
        <meta property="og:description" content={entry?.metadescription}/>
        <meta property="og:image" content={entry.thumbnail}/>

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={location} />
        <meta property="twitter:title" content={entry?.pagetitle} />
        <meta property="twitter:description" content={entry?.metadescription} />
        <meta property="twitter:image" content={entry.thumbnail}/>

      </Head>
        <div>
            <div className="masthead">
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="post-heading">
                                <h1>{entry?.posttitle}</h1>
                                <span className="meta">
                                    Posted by
                                    <a href="#!"> {entry.authorname} </a>
                                     on {moment(entry.Publishdate).format('LL')}
                                </span>
                                <img src={entry.thumbnail} width="100%" />
                            </div>
                            <article className="mt-4">
                        
                                    <div dangerouslySetInnerHTML={{ __html: entry.bodyvalue }}>

                                    </div>
                                
                            </article>
                            <Shareicon link={location} data={entry} /> 
                            <Comments />
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}