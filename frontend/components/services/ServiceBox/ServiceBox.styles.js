import styled, {css} from "styled-components";
import {devices} from "../../layout/GlobalStyle ";

export const ServiceBoxStyles = styled.section`
  display: flex;
  width: 100%;
  overflow: hidden;
  //position: relative;
  justify-content: space-between;
  flex-direction: column;
  @media ${devices.laptop} {
    flex-direction: ${props => props.ComponentDirection == 'rtl' ? 'row-reverse' : 'row'};
  }

  &:hover img {
    transform: scale(1.1);
  }

  & img {
    transition: all 0.3s ease-in-out;
  }
`
export const ServiceBoxImage = styled.div`
  width: 100%;
  height: 320px;
  position: relative;
  @media ${devices.laptop} {
    width: 50%;
    height: 575px
  }
`

export const ServiceBoxContent = styled.div`
  width: 100%;
  text-align: center;
  padding: 0px 15px;
  margin: 64px 0;
  @media ${devices.laptop} {
    padding: 128px 96px;
    width: 49%;
    text-align: unset;
    margin: 0;
  }
`
export const Subtitle = styled.div`
  font-weight: 600;
  font-size: .9rem;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #cfa167;
`
export const Title = styled.h3`
  margin: 0 0 16px 0;
  font-weight: 700;
  font-size: 1.75rem;
`
export const Excerpt = styled.p`
  color: rgba(0, 0, 0, .6);
  font-size: .98rem;
  max-width: 100%;
  margin-bottom: 32px;
  @media ${devices.laptop} {
    max-width: 55ch;
  }
`
export const Button = styled.button`
  margin-top: 16px;
  background-color: #cfa167;
  border-radius: 4px;
  padding: 14px 15px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-size: .75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all .25s cubic-bezier(.3, .3, 0, .8);
  color: #fff;
  cursor: pointer;

`