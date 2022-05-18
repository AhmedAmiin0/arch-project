import styled, {css} from 'styled-components';
import {devices} from "../../../layout/GlobalStyle ";

export const RelatedProjectsStyles = styled.section`
  background-color: #3b0f62;
  width: 100%;
  position: relative;
  padding: 120px 0;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 60px;
`
export const RelatedProjectImagesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 0;

  & img {
    -webkit-transition: all 1s cubic-bezier(.25, .8, .25, 1);
    -o-transition: all 1s cubic-bezier(.25, .8, .25, 1);
    transition: all 1s cubic-bezier(.25, .8, .25, 1);
    z-index: 7;
    ${props => props.isActive ? css`
      opacity: 0.5;
    ` : css`
      opacity: 0;
    `}
          
  }

  ${props => console.log(props)}
`
export const RelatedProjectBox = styled.div`
  -webkit-transition: all 1s cubic-bezier(.25, .8, .25, 1);
  -o-transition: all 1s cubic-bezier(.25, .8, .25, 1);
  transition: all 1s cubic-bezier(.25, .8, .25, 1);
  padding: 48px;
  //text-align: center;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;
  display: flex;
  position: relative;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, .2);
  color: #fff;
  width: 100%;

  &:hover {
    background: rgb(${props => props.theme.bg});
    color: ${props => props.theme.text};
  }

  &:hover p {
    gap: 1.5rem;
    color: rgba(0, 0, 0, .8);;
  }
`
export const RelatedProjectContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  place-items: center;
  grid-template-columns: repeat(1, 1fr);
  text-align: center;
  @media ${devices.tablet} {
    text-align: unset;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.laptop} {
    text-align: unset;
    grid-template-columns: repeat(3, 1fr);
  }

  & h3 {
    margin: 0;
    cursor: pointer;
    font-size: 1.438rem;
  }

  & p {
    margin-bottom: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, .8);
    font-size: .8rem;
  }

  & h4 {
    margin: 0;
    padding: 8px 0;
    font-size: .875rem;
    cursor: pointer;
    font-weight: 700;
    @media ${devices.tablet} {
      font-size: 1rem;
      font-weight: 600;
    }

    &:hover {
      text-decoration: underline;
    }
  }

`
export const RelatedProjectDate = styled.span`
  margin-bottom: 16px;
  color: #cfa167;
  font-size: .8rem;
  font-weight: 700;
  cursor: pointer;
  -webkit-transition: all .25s cubic-bezier(.3, .3, 0, .8);
  -o-transition: all .25s cubic-bezier(.3, .3, 0, .8);
  transition: all .25s cubic-bezier(.3, .3, 0, .8);

  &:hover {
    text-decoration: underline;
  }
`