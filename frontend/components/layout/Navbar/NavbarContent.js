import {
    LogoBox,
    NavbarItem,
    NavbarItemsBox,
    NavbarLogo, NavbarRightSection,
    NavbarSection, NavbarSocialMediaIcons
} from "./Navbar.styles";
import Link from "next/link";
import {FaFacebookF, FaSearch, FaSun, FaTwitter, FaYoutube} from 'react-icons/fa';
import {IoLogoInstagram} from "react-icons/io";
import React, {useContext, useState} from "react";
import {StateContext} from "../Layout";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
const NavbarContent = () => {
    const [currentHover, setCurrentHover] = useState(null);
    const handleMouseEnter = (i) => setCurrentHover(i + 1);
    const handleMouseLeave = () => setCurrentHover(null)
    const [searchState,dispatchSearch] = useContext(StateContext);
    const router = useRouter();
    const {locale} = router
    const {t} = useTranslation()
    const NavbarItems = [
        {
            link: '/projects',
            name: t('common:projects'),
        },
        {
            link: '/services',
            name: t('common:services'),
        },
        {
            link: '/about',
            name: t('common:about'),
        },
        {
            link: '/contact',
            name: t('common:contact'),
        },
    ]
    return (
        <React.Fragment>
            <NavbarSection>
                <Link href='/'>
                    <LogoBox>
                        <NavbarLogo src='/logo.png' alt='logo' logoWidth={200} objectFit='cover'/>
                    </LogoBox>
                </Link>
                <NavbarItemsBox>
                    {NavbarItems.map((item, i) => (
                        <NavbarItem key={i} onMouseEnter={() => handleMouseEnter(i)}
                                    onMouseLeave={handleMouseLeave} $activeElement={currentHover}>
                            <Link href={item.link}>
                                <a>{item.name}</a>
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarItemsBox>
            </NavbarSection>
            <NavbarSection>
                <NavbarRightSection>
                    {/*<Link href='search'>*/}
                    {/*<NavbarItem>*/}
                    {/*    <a onClick={() => dispatchSearch(true)}><FaSearch/></a>*/}
                    {/*</NavbarItem>*/}
                    {/*</Link>*/}
                    {locale === 'ar' ?
                        <Link href={router.asPath} locale={'en'}>
                            <NavbarItem>
                                <a> En</a>
                            </NavbarItem>
                        </Link> :
                        <Link href={router.asPath} locale={'ar'}>
                            <NavbarItem>
                                <a> غ</a>
                            </NavbarItem>
                        </Link>
                    }
                </NavbarRightSection>
                <NavbarRightSection>
                    <NavbarSocialMediaIcons><a href='https://www.facebook.com/mohamed.mohamed.9'
                                               target='_blank'><FaFacebookF/></a></NavbarSocialMediaIcons>
                    <NavbarSocialMediaIcons><a href='https://www.instagram.com/mohamed.mohamed.9/'
                                               target='_blank'><FaTwitter/></a></NavbarSocialMediaIcons>
                    <NavbarSocialMediaIcons><a href='https://www.instagram.com/mohamed.mohamed.9/'
                                               target='_blank'><IoLogoInstagram/></a></NavbarSocialMediaIcons>
                    <NavbarSocialMediaIcons><a href='https://www.instagram.com/mohamed.mohamed.9/'
                                               target='_blank'><FaYoutube/></a></NavbarSocialMediaIcons>
                </NavbarRightSection>
            </NavbarSection>
        </React.Fragment>
    )
}
export default NavbarContent