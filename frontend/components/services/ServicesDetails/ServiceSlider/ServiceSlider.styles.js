import styled from "styled-components";
import {SliderBox} from "../../../Home/hero/Slider.styles";

export const ServiceDetailsWrapper = styled(SliderBox)`
  height: 60vh;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
    background: rgba(0,0,0,0.3);
  }
`