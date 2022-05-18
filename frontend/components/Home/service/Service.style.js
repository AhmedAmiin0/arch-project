import styled from "styled-components";
import {Container, devices} from "../../layout/GlobalStyle ";

export const ServicesSection = styled.section`
  margin-bottom: 110px;

`
export const Raw = styled.div`
  display: grid;
  place-items: center;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);

  }
`
export const ServicesCard = styled.div`
  margin: 40px 0;
  @media ${devices.laptop} {
    margin: 0;
  }
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }
`
export const ServicesImageContainer = styled.div`
  width: 100%;
  height: 90vw;
  overflow: hidden;
  margin-bottom: 32px;
  //transition: all .8s;
  position: relative;

  @media ${devices.laptop} {
    height: 350px;
  }
  @media ${devices.laptopL} {
    height: 400px;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .8s;
  }
`
// export const ServicesImage = styled.img`
//
// `
export const ServicesContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;


  & h3 {
    margin: 0;
    font-weight: 600;
    font-size: .9rem;
    text-transform: uppercase;
    margin-bottom: 16px;
    color: #cfa167;
  }

  & h2 {
    margin: 0 0 16px 0;
    font-weight: 700;
  }

  & p {
    margin-bottom: 32px;
    color: rgba(0, 0, 0, .6);
    font-size: .98rem;
  }

  & span {
    font-size: .75rem;
    font-weight: 700;
    color: ${props => props.theme.text};
  }
`
