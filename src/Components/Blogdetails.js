import { Comments } from "./Comments";

export default function Blogdetails(props) {
    const {entry} = props;
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
                            <img src={entry.thumbnail} width="100%"/>
                        </div>
                        <article dangerouslySetInnerHTML={{__html : entry.bodyvalue}}>

                    </article>
                    </div>
                    
                </div>
            </div>
        </div>  
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    
                </div>
            </div>
        </article>

        <Comments/>
    </div>
  );
}