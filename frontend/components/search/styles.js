import styled from "styled-components";
import { devices } from "../layout/GlobalStyle ";
// import {devices} from "../../layout/GlobalStyle ";

export const Search = styled.section``;

export const SearchRow = styled.div`
	display: grid;	
	grid-template-columns: 1fr;
	gap: 1.5rem;
	@media ${devices.laptop} {
		grid-template-columns: 3fr 1fr;
	}
`;
