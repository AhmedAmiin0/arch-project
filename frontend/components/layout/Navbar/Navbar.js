import { HeaderContainer, NavbarBars, NavbarContainer } from "./Navbar.styles";
import { FaBars } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import NavbarContent from "./NavbarContent";
import { SideBar } from "./Sidebar";
import { useRouter } from "next/router";

export const Navbar = () => {
	const router = useRouter();
	const route =
		router.pathname.split("/")[router.pathname.split("/").length - 1];

	const transparentNavbar = [
		"",
		"about",
		"contact",
		"projects",
		"services",
		"blog",
	].includes(route);

	const [sideBarStatus, setSideBarStatus] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const openSideBar = () => {
		setSideBarStatus(true);
		setIsActive(true);
	};

	const closeSideBar = () => {
		setSideBarStatus(false);

		if (window.scrollY >= 120) return;
		setIsActive(false);
	};

	const handleActive = useCallback(() => {
		if (window.scrollY >= 120 && !isActive) setIsActive(true);
		if (window.scrollY < 120 && isActive && transparentNavbar)
			setIsActive(false);
	}, [transparentNavbar, setIsActive, isActive]);

	useEffect(() => {
		window.addEventListener("scroll", handleActive);
		return () => window.removeEventListener("scroll", handleActive);
	}, [handleActive]);

	useEffect(() => {
		if (transparentNavbar) setIsActive(false);
		else setIsActive(true);
	}, [transparentNavbar, route]);

	return (
		<>
			<HeaderContainer isActive={isActive}>
				<NavbarContainer>
					<NavbarContent />
					<NavbarBars onClick={openSideBar}>
						{!sideBarStatus && (
							<a>
								<FaBars />
							</a>
						)}
					</NavbarBars>
					<SideBar sideBarStatus={sideBarStatus} closeSideBar={closeSideBar} />
				</NavbarContainer>
			</HeaderContainer>
		</>
	);
};
