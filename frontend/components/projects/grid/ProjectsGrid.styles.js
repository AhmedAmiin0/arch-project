import styled from "styled-components";
import {devices} from "../../layout/GlobalStyle ";
import {IconicBar} from "../../Home/hero/Slider.styles";

export const ProjectsGridStyles = styled.section`
  display: grid;
  position: relative;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 0 60px;
  & a {
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 650px;

    img {
      opacity: 0.8;
      transition: all 1s cubic-bezier(.25, .8, .25, 1);
    }
  }

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const ProjectsGridContainer = styled.div`
  position: relative;
  background-color: #3b0f62;
  cursor: pointer;

  &:hover img {
    opacity: .4;
    transform: scale(1.05, 1.05);
  }

  &:hover > div {
    display: flex;
  }
`
export const ResponsiveIconicBar = styled(IconicBar)`
  display: none;
  @media ${devices.laptop} {
    display: block;
  }
`;
export const DateYear = styled.div`
  color: #cfa167;
  font-size: .875rem;
  font-weight: 700;
  margin-bottom: 16px;
`;
export const ProjectGridContent = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 5;
  color: #fff;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  transition: all 1s cubic-bezier(.25, .8, .25, 1);
  display: none;

  & h3 {
    font-weight: 700;
    margin: 0;
  }

  & span {
    margin-bottom: 16px;
    opacity: 0.8;
    font-size: .875rem;
    font-weight: 700;
  }

  & div {
    font-size: .875rem;
    font-weight: 700;
  }
`
