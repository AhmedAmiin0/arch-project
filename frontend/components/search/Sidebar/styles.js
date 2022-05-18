import styled from "styled-components";

export const Sidebar = styled.aside``;

export const Box = styled.div`
	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}
`;

export const BoxTitle = styled.h3`
	font-weight: 700;
	color: #000;
	text-transform: uppercase;
	border-bottom: 4px solid #000;
	padding: 0 20px 20px;
`;

export const BoxInfo = styled.div`
	padding: 20px;
`;

export const CategoriesList = styled.ul``;

export const CategoriesItem = styled.li``;

export const CategoriesItemLink = styled.a`
	line-height: 2;
	text-transform: capitalize;
	color: #cfa167;
	transition: color 0.25s cubic-bezier(0.3, 0.3, 0, 0.8);

	&:hover {
		color: #000;
	}
`;

export const Form = styled.form``;

export const Input = styled.input`
	width: 100%;
	outline: none;
	border-radius: 4px;

	&:not(:last-of-type) {
		margin-bottom: 10px;
	}

	&[type="email"] {
		border: 1px solid #cfa167;
		padding: 15px;
		transition: border-color 0.25s cubic-bezier(0.3, 0.3, 0, 0.8);

		&:focus {
			border-color: #000;
		}
	}

	&[type="submit"] {
		color: #000;
		border: none;
		padding: 20px;
		background: #000;
		color: #fff;
		font-weight: 800;
		text-transform: capitalize;
	}

	&[type="checkbox"] {
		margin-top: 5px;
	}
`;

export const Label = styled.label`
	cursor: pointer;
`;

export const Checkbox = styled.div`
	display: grid;
	grid-template-columns: 30px 1fr;
	gap: 5px;
	margin-bottom: 10px;
`;
