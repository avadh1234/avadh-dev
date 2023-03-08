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
    const {link} = props
    console.log(link);
  return (
    <div>
      <h1>Social Share - GeeksforGeeks</h1>
      <FacebookShareButton
        url={`${link}`} >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton
        url={`${link}`} >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton
        url={`${link}`} >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton
        url={`${link}`} >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={`${link}`} >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}