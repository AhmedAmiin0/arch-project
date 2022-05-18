import styled from 'styled-components';
import {devices} from "../../../layout/GlobalStyle ";
import {IconicBar} from "../../../Home/hero/Slider.styles";

export const ProjectDetailsStyles = styled.section`
  transition: opacity .5s ease;
  overflow: hidden;
  background-attachment: initial !important;
  background-color: #000000 !important;
`
export const ProjectDetailsContainer = styled.div`
  display: grid;
  padding: 65px 15px;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  //justify-content: center;
  //justify-items: center;
  //align-items: center;
  @media ${devices.tablet} {
    grid-template-columns: repeat(${props => props.colsNumber && props.colsNumber >= 2 ? 2 : props.colsNumber}, 1fr);
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(${props => props.colsNumber && props.colsNumber >= 4 ? 4 : props.colsNumber}, 1fr);
  }
`
export const ProjectDetailsBox = styled.div`
  border: 1px solid #cfa167;
  background-color: #000;
  transition: all 1s cubic-bezier(.25, .8, .25, 1);
  margin-top: 16px;
  margin-bottom: 16px;
  box-shadow: 0 64px 128px rgb(0 0 0 / 20%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;

  &:hover {
    //margin-bottom: -10px;
    transform: translateY(10px);
  }

`
export const ProjectSubtitle = styled.div`
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: .75rem;
  letter-spacing: 1px;
  margin-bottom: 16px;
`
export const ProjectTitle = styled.div`
  color: #cfa167;
  font-weight: 600;
`
export const ProjectDetailsIconicBar = styled(IconicBar)`
  width: 2px;
  height: 32px;
  margin-bottom: 16px;
  opacity: .2;
  background-color: #fff;
`