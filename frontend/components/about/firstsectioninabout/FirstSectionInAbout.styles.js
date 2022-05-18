import styled, {css} from "styled-components";
import {Container, devices} from "../../layout/GlobalStyle ";

export const FirstSectionInAboutStyles = styled.section`
  //margin-bottom: 120px;
  position: relative;
`;
export const FirstSectionInAboutImageContainer = styled.div`
  position: relative;
  height: 80vmin;
  width: 100%;
  background: #3b0f62;
  overflow: hidden;
  top: 0;

  img {
    opacity: 0.7;
  }

  right: 0;
  ${props => props.theme.isAr ? css`
    left: 0;
    right: auto;
    ${props.componentDirection == 'rtl' && css`
      left: auto;
      right: 0;
    `}
  ` : css`
    ${props.componentDirection == 'rtl' && css`
      right: auto;
    `}
  `
  }

  @media ${devices.laptop} {
    width: 40%;
    height: 100%;
    position: absolute;
  }


`
export const FirstSectionInAboutContent = styled.div`
  width: 100%;

  & p {
    margin-bottom: 1rem;
    color: inherit;
  }

  @media ${devices.laptop} {
    width: 50%;
    padding: 120px 0;
  }
`
export const Subtitle = styled.h2`
  text-transform: uppercase;
  display: block;
  color: ${props => props.theme.text};
  font-size: .9rem;
  font-weight: 600;
  letter-spacing: 8px;
  margin-bottom: 16px;
`
export const Title = styled.h1`
  margin: 0 0 32px 0;
  font-weight: 700;
  color: ${props => props.theme.text};
  font-size: 2.625rem;
`
export const FirstSectionInAboutContentContainer = styled(Container)`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: row;
  text-align: start;
  ${props => props.componentDirection == 'rtl' && css`
    flex-direction: row-reverse;
  `}
  ${props => props.theme.isAr && css`
    direction: rtl;
  `
  }
`
export const PlaceHolder = styled.div`
  visibility: hidden;
  @media ${devices.laptop} {
    width: 50%;
  }
`
