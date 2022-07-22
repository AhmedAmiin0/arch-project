import styled from "styled-components";
import {Container} from "../GlobalStyle ";

export const BreadcrumbSection = styled.section`
  background-color: #3b0f62;
  padding: 230px 0 120px;
  color: #fff;
position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .4) 0, rgba(0, 0, 0, 0) 100%);
  }
`;
export const BreadcrumbContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;

`
export const Subtitle = styled.h2`
  text-transform: uppercase;
  font-size: .9rem;
  font-weight: 600;
  letter-spacing: ${props => props.locale == 'en' ? '8px' : '1px'};
  margin: 0;
  margin-bottom: 16px;
  margin-right: -8px;
  color: #fff;
    z-index: 5;

`;
export const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  color: #fff;
  max-width: 100%;
  font-size: 3rem;
  margin-bottom: 16px;
    z-index: 5;

`;
export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  padding: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
    z-index: 5;

`
export const PrevLink = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  z-index: 5;

  & a {
    margin-right: 16px;
    margin-left: 16px;
  }

  & a:hover {
    text-decoration: underline;
  }
`
export const ActiveLink = styled.div`
  color: #cfa167;
  text-transform: capitalize;

  & a {
    margin-right: 16px;
    margin-left: 16px;
  }
`