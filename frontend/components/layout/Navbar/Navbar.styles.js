import styled, { css } from "styled-components";
import { devices } from "../GlobalStyle ";
import React from "react";

export const HeaderContainer = styled.header`
	left: 0;
	top: 0;
	width: 100%;
	z-index: 200;
	background-color: transparent;
	border-bottom: none;
	-webkit-box-shadow: none;
	position: absolute;
	box-shadow: none;
	//color: #fff;
	a {
		color: #fff;
	}

	&:before {
		content: "";
		position: absolute;
		top: -130px;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgb(${(props) => props.theme.bg});
		transition: all 0.5s;
	}

	&:hover:before {
		top: 0;
	}

	&:hover {
		a {
			color: rgba(0, 0, 0, 0.4);
		}
	}

	&:hover a {
		color: #000;
	}

	${(props) =>
		props.isActive == true &&
		css`
			background-color: rgb(${(props) => props.theme.bg});
			border-bottom: 1px solid rgba(${(props) => props.theme.bg}, 0.05);
			-webkit-box-shadow: 0 0 16px rgb(0 0 0 / 5%);
			box-shadow: 0 0 16px rgb(0 0 0 / 5%);
			position: fixed;

			a {
				color: black;
			}
		`}
`;

export const NavbarContainer = styled.nav`
	padding: 30px;
	position: relative;
	font-size: 0.775rem;
	font-weight: 800;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const NavbarSection = styled.div`
	display: flex;
	align-items: center;
`;
export const LogoBox = styled.div`
	//margin-right: 24px;
	//margin-left: 24px;
	cursor: pointer;
`;
export const NavbarLogo = styled.img`
	width: ${(props) =>
		props.logoWidth && props.logoWidth < 100 ? props.logoWidth : "60px"};
	height: 45px;
	object-fit: ${(props) => props.objectFit || "contain"};
`;
export const NavbarItemsBox = styled.ul`
	margin-left: 24px;
	margin-right: 24px;
	display: none;
	@media ${devices.laptop} {
		display: flex;
	}
`;

export const NavbarItem = styled.li`
	margin-left: 10px;
	margin-right: 10px;
	position: relative;
	cursor: pointer;

	a {
		transition: all 0.5s;
		text-transform: uppercase;
		padding: 16px 10px;
	}

	button {
		transition: all 0.5s;
		text-transform: uppercase;
		padding: 16px 10px;
	}

	${(props) =>
		props.$activeElement &&
		css`
			&:nth-of-type(${props.$activeElement}) {
				a:hover {
					opacity: 1;
				}
			}

			&:not(:nth-of-type(${props.$activeElement})) {
				a {
					opacity: 0.5;
				}
			}
		`}
`;
// export const NavbarContentForResponsive = styled(React.Fragment)`
//   display: none;
//   @media ${devices.laptop} {
//     display: block;
//   }
// `
export const NavbarSocialMediaIcons = styled(NavbarItem)`
	margin: 0;
	padding: 2px;

	a {
		margin: 0;

		width: 32px;
		height: 32px;
		font-size: 0.9rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}
`;
export const NavbarRightSection = styled(NavbarItemsBox)`
	margin-right: 24px;
	margin-left: 24px;

	& :first-child {
		margin: 0;
	}
`;
export const NavbarBars = styled.div`
	display: block;
	font-size: 1.5rem;
	cursor: pointer;
	@media ${devices.laptop} {
		display: none;
	}
`;
export const SideBarContainer = styled.div`
	position: fixed;
	top: 0;
	height: 100%;
	right: ${(props) => (props.isOpen == true ? "0" : "-320px")};
	z-index: 290;
	width: 320px;
	height: 100%;
	overflow: hidden;
	background-color: #fff;
	color: #fff;
	font-weight: 600;
	visibility: visible;
	box-shadow: 0 0 16px rgb(0 0 0 / 5%);
	opacity: 1;
	transition: all 0.5s linear;
	${(props) =>
		props.theme.isAr &&
		css`
			right: auto;
			left: ${props.isOpen == true ? "0" : "-320px"};
		`}
`;

export const SideBarTopIcons = styled.div`
	padding: 25px 25px 10px;
	display: flex;
	align-items: center;
	justify-content: end;
	color: #fff;
	//position: absolute;
	//right: 16px;
	//top: 16px;
	z-index: 98;

	font-size: 1.5rem;

	a {
		cursor: pointer;
		margin: 0.5rem;
	}
`;
export const LangButton = styled.a`
	padding: 7px 20px;
	display: inline-block;
	border-radius: 10%;
	background-color: ${(props) => props.theme.text};
	color: rgb(${(props) => props.theme.bg}) !important;
	margin-bottom: 32px;
	cursor: pointer;
`;
// export const SideBarMenuContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   background-color: red;
// `
export const SideBarMenu = styled.div`
	padding: 0px;
	top: 0px;
	//position: absolute;
	width: 312px;

	a {
		color: ${(props) => props.theme.text};
	}

	//font-size: .9rem;
`;
export const SideBarInnerMenu = styled.div`
	padding: 10px 32px;
	height: 100%;
`;
export const SidebarItemsBox = styled.ul`
	display: flex;
	flex-direction: column;
	font-weight: 600;
	padding: 0;
	margin: 0 -32px 64px -32px;

	a {
		font-size: 1.5rem;
		font-weight: 700;
		padding: 8px 32px;
	}
`;
export const SideBarSocialMediaIcons = styled.a`
	margin: 0 5px;
	padding: 0px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.text};
	color: rgb(${(props) => props.theme.bg}) !important;
	width: 32px;
	height: 32px;
	font-size: 0.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-weight: 600;
	transition: all 0.5s;
`;
export const FacebookIcon = styled(SideBarSocialMediaIcons)`
	&:hover {
		background-color: #3b5998;
		color: rgb(${(props) => props.theme.bg}) !important;
	}
`;
export const TwitterIcon = styled(SideBarSocialMediaIcons)`
	&:hover {
		background-color: #1da1f2;
		color: rgb(${(props) => props.theme.bg}) !important;
	}
`;
export const InstagramIcon = styled(SideBarSocialMediaIcons)`
	&:hover {
		background: radial-gradient(
			circle at 30% 107%,
			#fdf497 0,
			#fdf497 5%,
			#fd5949 45%,
			#d6249f 60%,
			#285aeb 90%
		);
		color: rgb(${(props) => props.theme.bg}) !important;
	}
`;
export const YoutubeIcon = styled(SideBarSocialMediaIcons)`
	&:hover {
		background-color: #ff0000;
		color: rgb(${(props) => props.theme.bg}) !important;
	}
`;
export const SideBarSocialBox = styled.div`
	display: flex;
	align-items: center;
	//justify-content: center;
	margin-top: 32px;
`;
