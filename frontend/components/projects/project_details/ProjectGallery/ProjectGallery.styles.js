import styled, { css } from "styled-components";
import { devices } from "../../../layout/GlobalStyle ";

export const ProjectGalleryStyles = styled.section`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`;

export const ProjectImageBox = styled.div`
	//flex: 1;
	width: 100%;
	//height: 100%;
	position: relative;
	background-color: #000;
	//transition: .3s;
	cursor: pointer;

	&:hover img {
		opacity: 0.7;
	}

	& img {
		-webkit-transition: 0.3s;
		-moz-transition: 0.3s;
		-o-transition: 0.3s;
		transition: 0.3s;
	}

	@media ${devices.tablet} {
		width: 50%;
	}
	@media ${devices.laptop} {
		width: 25%;
	}
`;
export const GalleryOverlay = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	background: rgba(0, 0, 0, 0.9);
	${(props) =>
    props.isOpen
      ? css`
					z-index: 1000;
					opacity: 1;
			  `
      : css`
					z-index: -1;
					opacity: 0;
			  `}
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const GalleryOverlayContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		width: 100%;
		position: relative;
		overflow: hidden;
		@media ${devices.tablet} {
			max-height: 95%;
		}

		.slick-slider {
			position: relative;
			display: flex;
			height: 100%;
			text-align: center;
			justify-content: center;
			align-items: center;

			.slick-list {
				z-index: 7;
				@media ${devices.tablet} {
					max-width: 85%;
				}
        .slick-slide {
              float: left !important;
            }
			}
		}

		.slick-next,
		.slick-prev {
			top: 38%;
			cursor: pointer;
			background: rgba(0, 0, 0, 0.6);
			border: 0;
			border-radius: 0;
			box-shadow: none;
			font-size: 1rem;
			font-weight: 700;
			outline: 0;
			z-index: 6565;
			line-height: 1.5;
			display: none;
			@media ${devices.tablet} {
				display: flex;
			}
		}
	}
`;

export const ImageContainer = styled.div`
	max-width: 100% !important;
	max-height: 100vh !important;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	img {
		pointer-events: none;
		max-width: 100%;
		max-height: 100vh;
		margin: auto;
		display: block;
	}
`;
