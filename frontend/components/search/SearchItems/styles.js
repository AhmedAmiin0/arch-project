import styled from "styled-components";
import NextImage from "next/image";

export const SearchItems = styled.section``;

export const SearchItem = styled.article`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
	align-items: center;
	margin-bottom: 2rem;

	/* @media (max-width: 1000px) {
		grid-template-columns: 1fr;
		padding: 0 1rem;
	}

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		padding: 0 2rem;
	} */
`;

export const ImageContainer = styled.div`
	position: relative;
`;

export const Image = styled(NextImage)``;

export const Info = styled.div``;

export const Title = styled.h3`
	margin-bottom: 16px;
`;

export const TitleLink = styled.a`
	color: #cfa167;
	font-size: 1.25rem;
	transition: color 0.25s cubic-bezier(0.3, 0.3, 0, 0.8);

	&:hover {
		color: #000;
	}
`;

export const Desc = styled.p`
	margin-bottom: 32px;
`;

export const InfoDetails = styled.div``;

export const CommentsCount = styled.span`
	color: #cfa167;
	font-weight: 600;
`;

export const Date = styled.span`
	font-weight: 600;
	color: #000;
	margin-left: 1rem;
`;
