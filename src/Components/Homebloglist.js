import Link from "next/link";
const avadh = [1,2,3,4]
export default function Homebloglist(props) {
    const {entry} = props;
    return (
        <div>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-md-10 col-lg-8 col-xl-7" >
                    {avadh.map((e,index)=>{
                        return(
                       <div key={index}>
                        <div className="post-main" >
                            <div className="post-image">
                                <img src="/about-bg.jpg" />
                            </div>
                            <div className="post-preview">
                                <Link href="/123">
                                    <h2 className="post-title">Man must explore, and this is exploration at its greatest</h2>
                                    <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
                                </Link>
                                <p className="post-meta">
                                    Posted by
                                    <a href="#">Start Bootstrap</a>
                                    on September 24, 2022
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

export const getStaticProps = async (context) => {
    const { slug } = context.params;
    const res = await fire.firestore().collection("blog").limitToFirst(4).get()
    const entry = res.docs.map(entry => entry.data());
    if (entry.length) {
      return {
        props: {
          entry: entry[0]
        }
      }
    } else {
      return {
        props: {}
      }
    }
  }