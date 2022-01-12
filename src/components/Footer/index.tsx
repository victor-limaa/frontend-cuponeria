import { FooterIcon, FooterWrapper } from "./styles";
import FacebookIcon from "../../assets/images/face.svg";
import InstagraIcon from "../../assets/images/insta.svg";
import TwitterIcon from "../../assets/images/twitter.svg";
import YoutubeIcon from "../../assets/images/youtube.svg";

interface Props {
  position: string;
}

export const Footer = ({ position }: Props) => {
  return (
    <FooterWrapper position={position}>
      <FooterIcon>
        <FacebookIcon />
      </FooterIcon>
      <FooterIcon>
        <InstagraIcon />
      </FooterIcon>
      <FooterIcon>
        <TwitterIcon />
      </FooterIcon>
      <FooterIcon>
        <YoutubeIcon />
      </FooterIcon>
    </FooterWrapper>
  );
};
