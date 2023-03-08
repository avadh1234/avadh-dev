import Blogdetails from "@/Components/Blogdetails";
import { Comments } from "@/Components/Comments";
import fire from "@/config/config";
import { useRouter } from "next/router";

export default function PostDetail(props) {
    const {entry} = props;
    const router = useRouter()
  if (router.isFallback) {
    return (
      <div>loading</div>
    )
  }else{ 
    if(entry){
  return (
      <Blogdetails entry={entry}/>
  );

    }
    else{
      return(
        <div>no data</div>
      )
    }
  }
}


export const getStaticPaths = async () => {
    const entries = await fire.firestore().collection("blog").get()
    const paths = entries.docs.map(entry => ({
      params: {
        slug: entry.data().urlstructure
      }
    }));
    return {
      paths,
      fallback: true
    }
  }

export const getStaticProps = async (context) => {
    const { slug } = context.params;
    const res = await fire.firestore().collection("blog").where("urlstructure", "==", slug).get()
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