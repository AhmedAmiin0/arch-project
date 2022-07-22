import styled from "styled-components";
import {SectionHeader} from "../GridSection/GridSection.styles";
import {Raw} from "../service/Service.style";
import {devices} from "../../layout/GlobalStyle ";

export const ClientSectionContainer = styled.section`
  background: #f8f6f9;
  padding-left: 15px;
  padding-bottom: 120px;
  padding-right: 15px;
  color: #000 ;
`;
export const ClientSectionHeader = styled(SectionHeader)`
  margin: 0;
  padding: 120px 0;
  color: inherit;
`
export const ClientSectionGrid = styled(Raw)`
  grid-template-columns: repeat(1, 1fr);
  gap: 0;
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(5, 1fr);
  }
`
export const ClientBox = styled.a`
  display: block;
  width: 100%;
  padding: 16px;
  height: 400px;
  position: relative;
  background: rgb(${props => props.theme.bg});
  //box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: ${props => props.theme.text};
  transition: all 0.5s ease-in-out;

  @media ${devices.laptop} {
    height: 250px;
  }

  &:hover div {
    //display: none;
    visibility: hidden;
  }

  &:hover {
    border: 1px solid #cfa167;
    box-shadow: 0 64px 128px rgb(0 0 0 / 20%);

  }

  &:hover span {
    opacity: 1;
    top: 50%;
  }
`
export const ClientLogoContainer = styled.div`
  width: 100%;
  background: #fafafa;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`
export const ClientLink = styled.span`
  z-index: 1;
  position: absolute;
  top: 55%;
  font-weight: 900;
  transition: all .3s;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: .875rem;
  opacity: 0;
`
