import Link from "next/link";
const avadh = [1,2,3,4]
export default function Homebloglist() {
    return (
        <div>
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                  <div class="col-md-10 col-lg-8 col-xl-7" >
                    {avadh.map((e)=>{
                        return(
                       <>
                        <div className="post-main" key={e}>
                            <div className="post-image">
                                <img src="/about-bg.jpg" />
                            </div>
                            <div class="post-preview">
                                <Link href="/123">
                                    <h2 class="post-title">Man must explore, and this is exploration at its greatest</h2>
                                    <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3>
                                </Link>
                                <p class="post-meta">
                                    Posted by
                                    <a href="#!">Start Bootstrap</a>
                                    on September 24, 2022
                                </p>
                            </div>
                        </div>

                        <hr class="my-4" />
                     </>
                        )
                    })}
                    <div class="d-flex justify-content-end mb-4"><Link class="btn btn-primary text-uppercase" href="/blog">Older Posts →</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}