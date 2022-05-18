import styled from "styled-components";
import {SliderContentContainer} from "../hero/Slider.styles";
import {devices} from "../../layout/GlobalStyle ";

export const AboutUsContainer = styled(SliderContentContainer)`
  margin: 120px 0px;
  color: ${props => props.theme.text};
  //max-width: 80ch;
  //& p{
  //  color: #000;
  //}
  & p {
    max-width: 75ch;
    color: #505050;
  }
  & h1 {
    max-width: 100ch;
    font-size: 2.5rem;
  }
  @media ${devices.laptop} {
    & h1 {
      font-size: 3rem;
      max-width: 30ch;
    }
  }
`