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
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';

export default function Shareicon(props) {
  const { link, data } = props
  return (
    <div className='share-icon-main'>
      <FacebookShareButton
        url={`${link}`}
        quote={data?.metadescription}
      >
        <FacebookIcon size={50} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={`${link}`}
        title={data?.posttitle}
      >
        <TwitterIcon size={50} round />
      </TwitterShareButton>
      <PinterestShareButton
        url={`${link}`}
        description={data?.posttitle}
      >
        <PinterestIcon size={50} round />
      </PinterestShareButton>
      <LinkedinShareButton  url={`${link}`}>
        <LinkedinIcon size={50} round />
      </LinkedinShareButton>

    </div>
  );
}