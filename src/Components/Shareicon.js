import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
  } from 'next-share';

export default function Shareicon(props) {
    const {link , data} = props
    console.log(link ,data);
  return (
    <div>
      <h1>Social Share - GeeksforGeeks</h1>
      <FacebookShareButton
        url={`${link}`} 
        quote={data?.metadescription}
        >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton
        url={`${link}`} 
        // media={data?.thumbnail}
        description={data?.posttitle}
        >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton
        url={`${link}`} 
        title={data?.posttitle}
        >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton
        url={`${link}`} 
        title={data?.posttitle}
        separator=":: "
        >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={`${link}`} 
        title={data?.posttitle}
        >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}