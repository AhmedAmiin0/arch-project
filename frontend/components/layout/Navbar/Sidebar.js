import {
    FacebookIcon, InstagramIcon,
    LangButton,
    SideBarContainer,
    SideBarInnerMenu,
    SidebarItemsBox,
    SideBarMenu,
    SideBarSocialBox, SideBarTopIcons, TwitterIcon, YoutubeIcon
} from "./Navbar.styles";
import {NavbarItems} from "./NavbarItems";
import {FaFacebookF, FaInstagram, FaSearch, FaTwitter, FaYoutube} from "react-icons/fa";
import Link from "next/link";
import {GrClose} from "react-icons/gr";
import {useRouter} from "next/router";
import {StateContext} from "../Layout";
import {useContext, useEffect} from "react";

export const SideBar = (props) => {
    const router = useRouter();
    const {locale} = router
    const [dispatchSearch] = useContext(StateContext);


    return (
        <SideBarContainer isOpen={props.sideBarStatus}>
            <SideBarTopIcons>
                <a onClick={() => dispatchSearch(true)}><FaSearch/></a>
                <a onClick={props.closeSideBar}><GrClose/></a>
            </SideBarTopIcons>
            <SideBarMenu>
                <SideBarInnerMenu>
                    {locale === 'ar' ?
                        <Link href={router.asPath} locale={'en'}>
                            <LangButton>
                                En
                            </LangButton>
                        </Link> :
                        <Link href={router.asPath} locale={'ar'}>
                            <LangButton>
                                غ
                            </LangButton>
                        </Link>
                    }
                    <SidebarItemsBox>
                        {NavbarItems.map((item, i) => (
                            <Link key={i} href={item.link}>
                                <a>{item.name}</a>
                            </Link>
                        ))}
                    </SidebarItemsBox>
                    <SideBarSocialBox>
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
                    </SideBarSocialBox>
                </SideBarInnerMenu>
            </SideBarMenu>
        </SideBarContainer>
    )
}