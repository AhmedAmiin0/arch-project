import {
    AgencyDescription,
    Content,
    FooterContainer,
    FooterContent,
    GetInTouch,
    InnerFooter,
    SocialBox
} from "./Footer.styles";
import {Container} from "../GlobalStyle ";
import {FacebookIcon, InstagramIcon, SideBarSocialBox, TwitterIcon, YoutubeIcon} from "../Navbar/Navbar.styles";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import Link from "next/link";

const Footer = () => (
    <FooterContainer>
        <FooterContent>
            <InnerFooter>
                <Container>
                    <Content>
                        <AgencyDescription>
                            <div>
                                <img src='/logo.png' alt='logo' height='50' width='50'/>
                            </div>
                            <div style={{height: '40px'}}></div>
                            <div>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nisi eu nisl
                                interdum, euismod aliquam nunc commodo. Nullam euismod, nisi eu dignissim
                                consectetur, nisl nisl aliquet nisl, euismod aliquam nunc nisl eget nisl.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                            </div>
                        </AgencyDescription>
                        <GetInTouch>
                            <h3>Get In Touch</h3>
                            <div style={{height: '27px'}}></div>
                            <div>123456</div>
                            <div>email</div>
                            <div>address</div>
                            <div style={{height: '27px'}}></div>
                            <SocialBox>
                                <Link href='fwa'>
                                    <FacebookIcon>
                                        <FaFacebookF/>
                                    </FacebookIcon>
                                </Link>
                                <Link href='insta'>
                                    <InstagramIcon>
                                        <FaInstagram/>
                                    </InstagramIcon>
                                </Link>
                                <Link href={'youtube'}>
                                    <YoutubeIcon>
                                        <FaYoutube/>
                                    </YoutubeIcon>
                                </Link>
                                <Link href={'twitter'}>
                                    <TwitterIcon>
                                        <FaTwitter/>
                                    </TwitterIcon>
                                </Link>
                            </SocialBox>
                        </GetInTouch>
                    </Content>
                </Container>
            </InnerFooter>
        </FooterContent>
    </FooterContainer>
)
export default Footer