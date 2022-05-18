import styled from "styled-components";
import {devices} from "../../layout/GlobalStyle ";
import Slider from "react-slick";

export const IconicBar = styled.div`
  width: ${prop => prop.widthBar ?? '3px'};
  height: ${props => props.heightBar ?? '40px'};
  margin-bottom: 16px;
  background-color: #cfa167;
`
export const SliderContentContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;

  text-align: center;
  color: rgb(${props => props.theme.bg});

  & span {
    display: inline-flex;
    text-transform: uppercase;
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: 8px;
    margin-bottom: 16px;
    color: inherit;
    margin-right: -8px;
    z-index: 100;

  }

  & h1 {
    margin: 0;
    font-weight: 700;
    color: inherit;
    font-size: 2rem;
    margin-bottom: 16px;
    z-index: 100;
    max-width: 30ch;

  }

  & a {
    border-radius: 96px;
    background-color: rgba(0, 0, 0, .1);
    border: 2px solid #fff;
    color: #fff;
    padding: 12px 32px;
    text-transform: uppercase;
    font-size: .75rem;
    font-weight: 700;
    transform: translateY(0);
    letter-spacing: 1px;
    margin-top: 32px;
    transition: all .3s ease-in-out;
    z-index: 100;
  }

  & a:hover {
    background-color: rgb(${props => props.theme.bg});
    color: ${props => props.theme.text};
  }

  @media ${devices.laptop} {
    & h1 {
      font-size: 2.5rem;
    }
  }

`
export const HeroImage = styled.div`
  background-image: url(${props => props.image});
  width: ${props => props.aspectWidth ?? '100%'};
  height: ${props => props.aspectHeight ?? '100%'};
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    opacity: 0.1;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, 0) 100%);
  }
`
export const SliderBox = styled.section`
  div {
    z-index: 56;
    .slick-next, .slick-prev {
      z-index: 57;
    }
  }
`