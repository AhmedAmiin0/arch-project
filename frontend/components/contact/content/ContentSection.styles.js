import styled from "styled-components";
import {Container, devices} from "../../layout/GlobalStyle ";

export const ContentSectionStyles = styled(Container)`
  display: flex;
  margin-top: 120px;
  margin-bottom: 120px;
`
export const ImageContainer = styled.div`
  height: 100%;
  display: none;
  @media ${devices.laptop} {
    width: 50%;
    display: block;
  }

  & > span {
    position: unset !important;
    height: 500px !important;
  }

  img {
    position: unset !important;
    object-fit: cover;
    border-radius: 2%;

  }
`
export const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 30px;
  @media ${devices.laptop} {
    width: 50%;
  }

  & h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: ${props => props.theme.text};
  }
`

