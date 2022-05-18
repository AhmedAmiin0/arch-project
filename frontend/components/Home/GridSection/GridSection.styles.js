import styled from "styled-components";
import {Raw} from "../service/Service.style";
import {devices} from "../../layout/GlobalStyle ";
import {AboutUsContainer} from "../about-us/AboutUs.styles";

export const GridSectionContainer = styled.section`
  margin: 120px 0;
`;
export const GallaryRaw = styled(Raw)`
  gap: 0;
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const GridBox = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  text-align: center;
  background: #3b0f62;
  position: relative;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover a {
    transform: scale(1.1);
    opacity: 0.4;
  }

  &:hover span {
    opacity: 1;
    left: 50%;
  }

  &:hover h2 {
    opacity: 1;
    visibility: visible;
  }
  
`;
export const GridBoxImage = styled.a`
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
  width: 100%;
  display: block;
  height: 100%;
`
export const GridBoxIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 45%;
  font-size: 3rem;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  color: #ffffff;
  text-decoration: none;
  transform: translate(-50%, -50%)
`
export const FixedText = styled.h2`
  position: fixed;
  color: rgb(${props => props.theme.bg});
  transition: all .2s ease-in-out;
  top: 50%;
  left: 50%;
  z-index: 200;
  transform: translate(-50%, -50%);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  width: 40%;
  text-align: center;
  font-size: 5rem;
  text-shadow: 0 30px 60px #000;
  margin-bottom: 0;
`
export const SectionHeader = styled(AboutUsContainer)`
  margin-bottom: 90px;
  margin-top: 120px;

`